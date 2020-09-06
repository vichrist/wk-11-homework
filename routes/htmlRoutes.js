// including the path package so that we can locate the correct file path for HTML 

var path = require('path'); 
 
// var fs = require('fs');
// var express = require('express');

module.exports = function(app) {
    
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../Develop/public/notes.html' ));
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../Develop/public/index.html' )); 
    });  
};

