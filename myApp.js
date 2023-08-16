require('dotenv').config();
const e = require('express');
let express = require('express');
let app = express();
app.use('/public', express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});

// console.log("Hello World");

// app.get('/', function(req, res) {
//     res.send('Hello Express');
// });

app.get('/', function(req, res) {
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});

app.get('/json', function(req, res) {
    if (process.env.MESSAGE_STYLE == "uppercase") {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});
    }
});

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({time: req.time});
});

app.get('/:word/echo', function(req, res) {
    res.json({echo: req.params.word});
});

app.get('/name', function(req, res) {
    res.json({name: req.query.first + ' ' + req.query.last});
});


// RUN LOCAL VERIFICATION BY OPENING "http://localhost:3000" IN BROWSER AFTER RUNNING 'node myApp.js' WITHIN PROJECT DIRECTORY
app.listen(3000, function() {
    console.log("Server is listening on port 3000...");
});





































 module.exports = app;
