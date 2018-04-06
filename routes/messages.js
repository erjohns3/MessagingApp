const express = require('express');
const router = express.Router();
const config = require('../config/database');

const User = require('../models/user');
const Message = require('../models/message');

const usernames = [];
usernames.length = 20;

router.get('/home', function (req, res, next) {
    let messages = [];
    let num = 0;

    Message.getMessages(20, req.query.id, function (messageErr, docs) {
        if (messageErr) {
            throw messageErr;
        }
        if (docs.length > 0) {
            messages.length = docs.length;
            for (let i = 0; i < docs.length; i++) {
                User.getUserById(docs[i].user_id, function (errUser, user) {
                    if (errUser) {
                        throw errUser;
                    }
                    if (user) {
                        messages[i] = {
                            _id: docs[i]._id,
                            user_id: user._id,
                            name: user.name,
                            username: user.username,
                            msg: docs[i].msg
                        };
                    } else {
                        messages[i] = {
                            _id: docs[i]._id,
                            user_id: 0,
                            name: '--deleted--',
                            username: '--deleted--',
                            msg: docs[i].msg
                        };
                    }
                    num++;
                    if (num == messages.length) {
                        return res.json(messages);
                    }
                });
            }
        }else{
            return res.json([]);
        }
    });
});

module.exports = router;