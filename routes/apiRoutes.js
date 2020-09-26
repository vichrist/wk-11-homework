// pulling in file system dependency 

var fs = require("fs");

// creating variable that has a function assigned to it 
var newNotes = myNotes();

// function that will read the db.json file, parse the data and create a new user ID 

function myNotes() {
    
    var dbData = fs.readFileSync('./Develop/db/db.json', 'utf8');

    var dbDataParsed = JSON.parse(dbData);

    for (let i = 0; i < dbDataParsed.length; i++) {
        dbDataParsed[i].id = '' + i;
    }

    return dbDataParsed;
}

// GET/POST/DELETE CALLS 

module.exports = ((app) => {

    // GET REQUEST: 

    app.get('/api/notes', ((req, res) => {

        newNotes = myNotes();

        res.json(newNotes);
    }));

    // POST REQUEST: 

    app.post('/api/notes', ((req, res) => {

        newNotes.push(req.body);

        fs.writeFileSync('./Develop/db/db.json', JSON.stringify(newNotes), 'utf8');

        res.json(true);
    }));


    // DELETE REQUEST: 

    app.delete('/api/notes/:id',  ((req, res) => {

        var ID = req.params.id;
        
        var noteDel = newNotes.filter(noteDel => {

            return noteDel.id === ID; })[0];

        var index = newNotes.indexOf(noteDel);

        newNotes.splice(index, 1);

        fs.writeFileSync('./Develop/db/db.json', JSON.stringify(newNotes), 'utf8');

        res.json('This Note Has Been Deleted');
    }));
})