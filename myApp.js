require('dotenv').config();
const e = require('express');
let express = require('express');
let app = express();
app.use('/public', express.static(__dirname + '/public'))
// console.log("Hello World");

// app.get('/', function(req, res) {
//     res.send('Hello Express');
// })

app.get('/', function(req, res) {
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

app.get('/json', function(req, res) {
    if (process.env.MESSAGE_STYLE == "uppercase") {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});
    }
})

// RUN LOCAL VERIFICATION BY OPENING "http://localhost:3000" IN BROWSER AFTER RUNNING 'node myApp.js' WITHIN PROJECT DIRECTORY
app.listen(3000, function() {
    console.log("Server is listening on port 3000...");
});





































 module.exports = app;
