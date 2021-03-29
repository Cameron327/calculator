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
    console.log(req.body);

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var sum = num1 + num2;
    res.send("The sum of those numbers is " + sum);

});

// Add some new routes (What happens when the user goes to the get route? That is what the app.get is for)
// We will send the html page
app.get("/bmiCalculator.html", function(req, res) {
    app.sendFile(__dirname + "/bmiCalculator.html");
});



// set up the port with port 3000 using app.listen()
app.listen(3000, function() {
    console.log("Successfully opened port 3000");
});