var foo = function () {

};

exports.foo = foo;

var makeRequest = function (message) {
    var http = require('http');

    var message = 'Boooh';
    var options = {host: 'localhost', port: '8080', path: '/', method: 'POST'};


    http.request(options, function (response) {
        response.on('data', function (data) {
            console.log(data);
        })
    });

    request.write(message);
};

exports = makeRequest; // export a function



var logger = require('./logger');

logger.info('This is some information');
logger.warn('something bad is happening');