var express = require('express');
var app = express.createServer();
var socket = require('socket.io');
var io = socket.listen(app);

io.sockets.on('connection', function (client) {
    console.log("Client connected...");

    client.on('answer', function (question, answer) {
        client.broadcast.emit('answer', question, answer);
    });


    client.on('question', function (question) {
        client.get('question_asked', function (error, questionAsked) {
            if (!questionAsked) {
                client.broadcast.emit('question', question);
                client.set('question_asked', true);
            }
        });
    });
});