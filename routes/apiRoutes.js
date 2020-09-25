// pulling in dependencies 

var fs = require("fs");
var path = require('path');
var db = require('../Develop/db/db.json');

const { response } = require("express");
const { json } = require("body-parser");


// function to read the db.json file and create new id as user inputs new notes 

var newNotes = getNotes();
function getNotes() {

    var data = fs.readFileSync('Develop/db/db.json', 'utf8');
    var dataNotes = JSON.parse(data);

    for (let i = 0; i < dataNotes.length; i++) {
        dataNotes[i].id = '' + i;
    }

    return dataNotes;
}



module.exports = function(app) { 
   
    //GET REQUEST:
        app.get('/api/notes', ((req, res) => {
            newNotes = getNotes(); 
            res.json(newNotes); 
        }));
      
        
    //POST REQUEST: Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

        app.post('/api/notes', ((req, res) => {
            newNotes.push(req.body);
            var newUserID = (db.length).toString();
            newNotes.id = newUserID; 

            fs.writeFileSync('Develop/db/db.json', JSON.stringify(newNotes), 'utf8');
            res.json(newNotes);
            console.log('newnotes', newNotes);
        }));

    //DELETE REQUEST: 


};