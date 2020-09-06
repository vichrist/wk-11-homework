
var express = require('express');

// // creating an express server 
var app = express();  

// // set the port 
var PORT = 8080;

// // middleware that handles the data parsing 
app.use(express.urlencoded({ extended: true})); 
app.use(express.json()); 

// // routers that point our server to the route files 

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app); 

// // PORT listener 

app.listen(PORT, function() { 
    console.log('Listening on PORT: ' + PORT)
});