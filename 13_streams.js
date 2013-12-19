var http = require('http');
var fs = require('fs');
var file = fs.createReadStream('index.html');

file.on('data', function (chunk) {
    process.stdout.write(chunk.toString());
});


file.pipe(process.stdout, { end: false }); // By default pipe close the stream at the end, so never emit end event

file.on("end", function () {
    console.log('--File Complete--');
});


/*
 ReadStream is faster than write.
 The following is basic pipe
 */
var largeFile = fs.createReadStream("largeFile.txt");
var fileCopy = fs.createWriteStream("/tmp/copyOfLargeFile.txt");

largeFile.on('data', function (chunk) {
    var isBufferFlush = fileCopy.write(chunk);
    if (!isBufferFlush) { // Kernel buffer is full, lets pause input
        largeFile.pause();
    }
});

fileCopy.on('drain', function () {
    largeFile.resume();
});

largeFile.on('end', function () {
    fileCopy.end();
});

/**
 * Upload Server
 */
http.createServer(function (request, response) {
    var uploadedFile = fs.createWriteStream("/tmp/copyOfLargeFile.txt");

    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0;
    request.pipe(uploadedFile);
    request.on('data', function(chunk) {
        uploadedBytes += chunk.length;
        var progress = (uploadedBytes / fileBytes) * 100;
        response.write("progress: " + parseInt(progress, 10) + "%\n");
    });

    request.on('end', function(){
         response.end('File is uploaded');
    })  ;
}).listen('8080');

