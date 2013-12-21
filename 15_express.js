var express = require('express');
var url = require('url');
var request = require('request');

var app = express.createServer();

var quotes = {
    'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
    'berners-lee': 'The Web does not just connect machines, it connects people',
    'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
    'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function (request, response) {
    var quote = quotes[request.params.name];

    response.render('quote.ejs', {owner: request.params.name, quote: quote});
});

options = {
    protocol: "http:",
    host: "search.twitter.com",
    pathname: '/search.json',
    query: { q: "codeschool"}
};

var searchURL = url.format(options);

var app = express.createServer(); // Create Server Here

app.get('/', function (req, response) {
    request(searchURL).pipe(response);
});


app.listen(8080);
