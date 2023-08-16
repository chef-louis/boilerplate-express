let express = require('express');
let app = express();
console.log("Hello World");

app.get('/', function(req, res) {
    res.send('Hello Express');
})

// RUN LOCAL VERIFICATION BY OPENING "http://localhost:3000" IN BROWSER AFTER RUNNING 'node myApp.js' WITHIN PROJECT DIRECTORY
app.listen(3000, function() {
    console.log("Server is listening on port 3000...");
});





































 module.exports = app;
