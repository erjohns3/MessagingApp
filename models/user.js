const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lastseen: {
        type: Number,
        required: false
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(mongoose.Types.ObjectId(id), callback);
};

module.exports.getUserByEorU = function (email, username, callback) {
    const query = {
        $or: [{
            email: email
        }, {
            username: username
        }]
    };
    User.findOne(query, callback);
};

module.exports.getUserByEmail = function (email, callback) {
    const query = {
        email: email
    };
    User.findOne(query, callback);
};

module.exports.getUserByUsername = function (username, callback) {
    const query = {
        username: username
    }
    User.findOne(query, callback);
};

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (saltErr, salt) {
        if (saltErr) {
            console.log('salt error');
        }
        bcrypt.hash(newUser.password, salt, function (hashErr, hash) {
            if (hashErr) {
                console.log('hash error');
            }
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.updateLastSeen = function (user_id, callback) {
    let date = new Date();
    const update = {
        $set: {
            lastseen: Math.round(date.getTime() / 1000)
        }
    };
    const options = {
        upsert: true
    };
    User.findByIdAndUpdate(user_id, update, options, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
};

//////////////////////////////////////////////////////////////////////////

module.exports.updateName = function (id, newName, callback) {
    User.findByIdAndUpdate(id, {
        name: newName
    }, {
        new: true
    }, callback);
};

module.exports.updateUsername = function (id, newUsername, callback) {
    User.findByIdAndUpdate(id, {
        username: newUsername
    }, {
        new: true
    }, callback);
};

module.exports.updateEmail = function (id, newEmail, callback) {
    User.findByIdAndUpdate(id, {
        email: newEmail
    }, {
        new: true
    }, callback);
};

module.exports.updatePassword = function (id, newPassword, callback) {
    bcrypt.genSalt(10, function (saltErr, salt) {
        if (saltErr) {
            console.log('salt error');
            throw saltErr;
        }
        bcrypt.hash(newPassword, salt, function (hashErr, hash) {
            if (hashErr) {
                console.log('hash error');
                throw hashErr;
            }
            User.findByIdAndUpdate(id, {
                password: hash
            }, {
                new: true
            }, callback);
        });
    });
};

//////////////////////////////////////////////////////////////////////////

module.exports.deleteUser = function (id, callback) {
    User.findByIdAndRemove(id, callback);
};