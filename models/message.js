const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Message Schema
const messageSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
});

const Message = module.exports = mongoose.model('Message', messageSchema);

module.exports.addMessage = function (newMessage, callback) {
    newMessage.save(callback);
};

module.exports.getMessages = function (amount, oldestId, callback) {
    if(!oldestId){
        Message.find({})
        .sort({
            _id: 'desc'
        })
        .limit(amount)
        .lean()
        .exec(callback);
    }else{
        let oid = mongoose.Types.ObjectId(oldestId);
        Message.find({_id: {$lt: oid}})
        .sort({
            _id: 'desc'
        })
        .limit(amount)
        .lean()
        .exec(callback);
    }

};