const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);

//const port = process.env.PORT || 8080;      // deployment to Saleforce Heroku
const port = 3000; // local testing

server.listen(port);
console.log('server running...');

const users = require('./routes/users');
const messages = require('./routes/messages');

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

/////////////////////////////////////////////////////////////////////////

mongoose.connect(config.database);
var db = mongoose.connection;
// On connection
db.on('connected', function () {
    console.log('Connected to database ' + config.database);
});
//On disconnect
db.on('error', function (err) {
    console.log('database error: ' + err);
});

/////////////////////////////////////////////////////////////////////////

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// CORS middleware
app.use(cors());

// body parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// the module.exports function in ./config/passport.js
require('./config/passport')(passport);

/////////////////////////////////////////////////////////////////////////

app.use('/users', users);
app.use('/messages', messages);

/////////////////////////////////////////////////////////////////////////

// Index Route
app.get('/', function (req, res) {
    res.send('Invalid Endpoint');
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

/////////////////////////////////////////////////////////////////////////

/*
app.listen(port, function(){
    console.log('Server started in port '+port);
});
*/

/////////////////////////////////////////////////////////////////////////

var connections = [];
var socketUsers = [];

const User = require('./models/user');
const Message = require('./models/message');

io.on('connection', function (socket) {
    connections.push(socket);
    //console.log(socket);
    console.log('Connected: %s sockets connected', connections.length);

    // Disconnect
    socket.on('disconnect', function (data) {
        if (socket.username) {
            console.log(socket.username + ' disconnected');
            socketUsers.splice(socketUsers.indexOf(socket.username), 1);
        }
        connections.splice(connections.indexOf(socket), 1);
        updateUsernames()
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    socket.on('new message', function (data) {
        console.log(data);
        io.sockets.emit('new message', {
            user_id: socket.id,
            name: socket.name,
            username: socket.username,
            msg: data
        });
        let newMessage = new Message({ // name of the class is whatever the require const is at the top
            user_id: socket.id,
            msg: data
        });
        Message.addMessage(newMessage, function (messageErr, user) {
            if (messageErr) {
                throw messageErr;
            }
        });
    });

    socket.on('new user', function (data, callback) {
        console.log(data);
        User.getUserById(data, function (userErr, existingUser) {
            if (userErr) {
                throw userErr;
            }
            socket.id = existingUser._id;
            socket.name = existingUser.name;
            socket.username = existingUser.username;
            socketUsers.push({
                user_id: socket.id,
                name: socket.name,
                username: socket.username,
            });
            callback(true);
            updateUsernames();
            console.log('Username: ' + socket.username);
        });
    });

    function updateUsernames() {
        io.sockets.emit('new users', socketUsers);
    }
});

// Start Server