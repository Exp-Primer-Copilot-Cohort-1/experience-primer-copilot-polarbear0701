//create the web server
var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
});
connection.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

//get the index.html
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

//get the comment.html
app.get('/comment.html', function(req, res) {
    res.sendFile(__dirname + "/" + "comment.html");
})

//get the comment.json
app.get('/comment', function(req, res) {
    fs.readFile(__dirname + "/" + "comment.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    })
})

//get the comment.json
app.get('/comment', function(req, res) {
    fs.readFile(__dirname + "/" + "comment.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    })
})

//get the comment.json
app.get('/comment', function(req, res) {
    fs.readFile(__dirname + "/" + "comment.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    })
})

//get the comment.json
app.get('/comment', function(req, res) {
    fs.readFile(__dirname + "/" + "comment.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    })
})

//get the comment.json
app.get('/comment', function(req, res) {
    fs.readFile(__dirname + "/" + "comment.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    })
})

//get the comment.json
app.get('/comment', function(req, res) {
    fs.readFile(__dirname + "/" + "comment.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    })
})

//get the comment.json
app.get