const fs = require('fs');

fs.readFile(__filename, function cb(error, data){
    console.log('File Data is', data);
});

console.log('Will print first');