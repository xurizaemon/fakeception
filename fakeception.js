var fs = require('fs');
var plist = require('plist');

// convert .fakeworkflow from binary to xml via
// plutil -convert xml1 Example.fakeworkflow
var obj = plist.parse(fs.readFileSync('Example.fakeworkflow', 'utf8'));
console.log(JSON.stringify(obj));
