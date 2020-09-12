
var fs = require("fs");

var path = require('path'); 

var db = require('../Develop/db/db.json');
const { response } = require("express");
const { json } = require("body-parser");

module.exports = function(app) { 
   
    //GET REQUEST: read the db.json file and return saved notes as JSON. 
    app.get('/api/notes', function(request, response) {
        fs.readFile('../Develop/db/db.json', function(error, contents) {
            var dbData = JSON.parse(contents); 
            response.send(dbData); 
            console.log(dbData); 
        })}); 

    //POST REQUEST: Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

    app.post("/api/notes", (request, response) => {
        var userNote = request.body; // create variable to save note to the request body 
        var newUserID = db.length; // create variable that is assigned the length of the db.json file 
        userNote.newUserID = newUserID + 1; // combine variables above so new id can add to the length of the db.json file 
        db.push(userNote); // pushing the new note to the original db.json file 
        response.json(db); // responding (returning) db file to client 
        
        console.log('dbfile', db); // testing purposes only 
        console.log('note', userNote); // testing purposes only 
        console.log('userid', newUserID); // testing purposes only 
    });  
}; 

// app.post("/api/notes", (request, response) => {
//     var userNote = request.body; // create variable to save note to the request body 
//     var newUserID = db.length; // create variable that is assigned the length of the db.json file 
//     db.push(userNote);
//     userNote.newUserID = newUserID + 1; // combine variables above so new id can add to the length of the db.json file 
    
//     fs.readFile('../Develop/db/db.json', function (err, data) {
//         var data = JSON.parse(data);
//         data.push(userNote); 
//     fs.writeFile('../Develop/db/db.json', JSON.stringify(data), function (error) {
//         if (error) throw error; 
//         console.log("Successfully Written");
//     })
//     });
//     response.json(userNote); // responding (returning) db file to client 
    
//     // console.log('dbfile', db); // testing purposes only 
//     // console.log('note', userNote); // testing purposes only 
//     // console.log('userid', newUserID); // testing purposes only 
//     }); 
// }; 
