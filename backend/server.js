const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const functions = require('./functions');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.post('/authorize', functions.authorize);
app.post('/search', functions.search);

//const port = process.env.PORT || 8080;
const port = 3000;

app.listen(port);
