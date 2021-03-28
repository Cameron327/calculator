const express = require("express");
const app = express();


app.get("/", function(req, res) {
    res.send("Hello World");
});


// set up the port with port 3000 using app.listen()
app.listen(3000, function() {
    console.log("Successfully opened port 3000");
});