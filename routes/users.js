const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user'); // sets the name of the class thats used to call all the functions from

// Register
router.post('/register', function (req, res, next) {
    let newUser = new User({ // name of the class is whatever the require const is at the top
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.getUserByEmail(newUser.email, function (emailErr, existingEmailUser) {
        if (emailErr) {
            return res.json({
                success: false,
                msg: 'Failed'
            });
        } else if (!existingEmailUser) {
            User.getUserByUsername(newUser.username, function (usernameErr, existingUsernameUser) {
                if (usernameErr) {
                    return res.json({
                        success: false,
                        msg: 'Failed'
                    });
                } else if (!existingUsernameUser) {
                    User.addUser(newUser, function (addErr, user) {
                        console.log('adding user');
                        if (addErr) {
                            return res.json({
                                success: false,
                                msg: 'Failed'
                            });
                        } else {
                            return res.json({
                                success: true,
                                msg: 'User registered'
                            });
                        }
                    });
                } else {
                    return res.json({
                        success: false,
                        msg: 'Username already in use'
                    });
                }
            });
        } else {
            return res.json({
                success: false,
                msg: 'Email already in use'
            });
        }
    });
});

// Authenticate
router.post('/authenticate', function (req, res, next) {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    // Email or Username
    User.getUserByEorU(email, username, function (err, user) {
        if (err) {
            return res.json({
                success: false,
                msg: 'Failed'
            });
        } else if (user) {
            User.comparePassword(password, user.password, function (err, isMatch) {
                if (err) {
                    return res.json({
                        success: false,
                        msg: 'Failed'
                    });
                } else if (isMatch) {
                    const token = jwt.sign({
                        data: user
                    }, config.secret, {
                        expiresIn: 604800
                    });
                    return res.json({
                        success: true,
                        token: 'JWT ' + token,
                        user: {
                            id: user._id,
                            name: user.name,
                            email: user.email,
                            username: user.username
                        }
                    });
                } else {
                    return res.json({
                        success: false,
                        msg: 'Password incorrect'
                    });
                }
            });
        } else {
            return res.json({
                success: false,
                msg: 'Neither email or username found'
            });
        }
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), function (req, res, next) {
    if (req.user) {
        res.json({
            user: req.user
        });
    } else {
        return res.status(400).send({
            message: 'no user'
        });
    }
    User.updateLastSeen(req.user._id, function (errUpdate, result) {
        if (errUpdate) {
            throw errUpdate;
        }
    });

});

// Validate
router.get('/validate', function (req, res, next) {
    res.send('VALIDATE');
});

router.put('/update', function (req, res, next) {
    let user = req.body;

    if(user.name.new){
        User.updateName(user._id, user.name.val, function (err, updatedUser) {
            return res.json(updatedUser);
        });
    }else if(user.username.new){
        User.getUserByUsername(user.username.val, function(err, existingUsernameUser){
            if(!existingUsernameUser){
                User.updateUsername(user._id, user.username.val, function (err, updatedUser) {
                    return res.json(updatedUser);
                });
            }else{
                return res.status(400).send({
                    message: 'Username already taken'
                });
            }
        });
    }else if(user.email.new){
        User.getUserByEmail(user.email.val, function(err, existingEmailUser){
            if(!existingEmailUser){
                User.updateEmail(user._id, user.email.val, function (err, updatedUser) {
                    return res.json(updatedUser);
                });
            }else{
                return res.status(400).send({
                    message: 'Email already taken'
                });
            }
        });
    }else if(user.password.new){
        User.updatePassword(user._id, user.password.val, function (err, updatedUser) {
            return res.send(updatedUser);
        });
    }
    
});

router.delete('/delete', function (req, res, next) {
    User.deleteUser(req.query.id, function (err, result) {
        res.send(result);
    });
})

module.exports = router;