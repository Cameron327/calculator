const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// body-parser is used with express so we can get access to it by doing app.use(body-parser);
// There are different body-parsers that you can use here
// body-parser.json: this will parse the data into json form (js objects)
// body-parser.urlencoded(): this is specifically used when parsing data from HTML forms
// If you give it an extended: true, it will allow you to POST nested objects
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// this is how you deal with post requests
app.post("/", function(req, res) {
    res.send("Thanks for posting that");
    console.log(req.body);
});

// set up the port with port 3000 using app.listen()
app.listen(3000, function() {
    console.log("Successfully opened port 3000");
});