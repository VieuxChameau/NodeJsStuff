var warn = function(message) {
    console.log("Warning: " + message);
};

var info = function(message) {
    console.log("Info: " + message);
};

var error = function(message) {
    console.log("Error: " + message);
};

exports.info = info;
exports.warn = warn;
exports.error = error;
