// like express
// 1. koa
// 2. sails
// 3. meteor

const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Everyone');
});

server.get('/about', (req, res) => {
    res.send('Vishavjeet here');
});

server.listen(4242, () => {
    console.log('Express Server is running...');
})