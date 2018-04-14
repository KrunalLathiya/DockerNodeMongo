const express = require('express');
const app = express();

const config = require('./db');
const PORT = 4000;

app.get('/', function(req, res) {
    res.json({"hello": "world"});
});

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});
