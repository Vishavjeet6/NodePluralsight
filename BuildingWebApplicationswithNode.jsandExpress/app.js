var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');
var app = express();

// app.use(morgan('combined'));
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'view', 'index.html'));
});

app.listen(4242, ()=>{
    debug(`listening on port ${chalk.green('4242')}`);
});