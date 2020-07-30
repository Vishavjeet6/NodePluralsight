const path = require('path');
const fs = require('fs');

const files = ['1object.js', 'noSuchFile', '2array.js'];
files.forEach(file => {
    try {
        const filePath = path.resolve("moduleConcurrency", file);
        const data = fs.readFileSync(filePath);
        console.log('File data is', data);
    } catch (error) {
        console.log('File Not found');
    }
})