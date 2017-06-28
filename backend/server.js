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

const port = process.env.PORT || 8080;

app.listen(port, "10.67.225.109", () => {
    console.log("App Started on 3000 ");
});
