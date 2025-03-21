var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream('/Users/sharanyasantosh/Desktop/Internet_Solutions/hello-world/bootstrap/cs615_nodejs' + '/readMe.txt',
    'utf8');
    myReadStream.on('data', function(chunk){
        console.log('New chunk received:' + chunk);
        });
var myWriteStream = fs.createWriteStream('/Users/sharanyasantosh/Desktop/Internet_Solutions/hello-world/bootstrap/cs615_nodejs' + '/writeMe.txt');
    myReadStream.pipe(myWriteStream);