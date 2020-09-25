const fs = require("fs");
var path = require('path');

module.exports = function(app) { 

    app.get('/notes', function(req, res) { // get request to return the notes.html file 
        res.sendFile(path.join(__dirname, "..//public/notes.html"));
        console.log("Successfully returned notes.html")
    });

    app.get('*', function(req, res) {  // get request that will return the index.html file if no matching route is found this in other words acts as a default 
        res.sendFile(path.join(__dirname, "..//public/index.html"));
        console.log("Successfully returned index.html")
    });
};

