var redis = require('redis');

var client = redis.createClient();

client.set("name", "VieuxChameau");

client.get("question", function (error, reply) {
    console.log(reply);
});

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

client.lpush("questions", question1);
client.lpush("questions", question2);

client.lrange("questions", 0, -1, function (err, questions) {
    console.log(questions);
});
