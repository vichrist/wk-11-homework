var express = require('express'); // importing express module

var app = express(); //using node module express to create a server 

app.use(express.static('public'));  // server is serving static content & rendering both index and note HTMLs

app.use(express.json()); //middleware to handle data parsing 
app.use(express.urlencoded({ extended: true})); 

require("./routes/htmlRoutes")(app); // directing the route for the HTML to the server

app.listen(8080, () => console.log('Listening on PORT 8080')); //set up PORT & listener

