'use strict';

const fs = require('fs');

let inFile = process.argv[2]; //a set of arguments that happen when you run javascript
                              //    0 node
                              //    1 readfile.js
                              //    2 names.txt
var promiseReadFile = new Promise(function(resolve, reject) {
  fs.readFile(inFile, {encoding: 'utf8'}, function(error, content) {
  if (error) {
    reject('not Read');
  } else {
    // 'Billy\nJames\nNick\n' --> ['Billy', 'James', 'Nick']
    let lines = content.split('\n');
    // clean up the array by removing the empty line
    lines.pop();
    resolve(lines);
    }
  });
});

promiseReadFile
  .then(function(fResolve) {
    fResolve.forEach(function(line) {
      console.log('Hello, ' + line + '!');
    });
  })
  .catch(function(fReject) {
    console.log(fReject);
  })
