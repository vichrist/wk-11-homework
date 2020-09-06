// including the path package so that we can locate the correct file path for HTML 

var dbFile = require('../Develop/db/db.json')




module.exports = function(app) {

//    * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON. 
    app.get('/api/notes', function(req, res) {
        // res.sendFile(path.join(__dirname, './db.jspn')); //should readt db json file and return all saved notes 
        res.send(dbFile); 
    }); 


  //  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

//     app.post("/api/notes", function(req, res) { 
        
//         // var userNote = req.body; 

//         var userNote = {
//             id: "", 
//             title: req.body.title,
//             text: req.body.text
//         };
//         // title.push(req.body); 
//         // res.sendFile(path.join(__dirname, "./public/notes.html")); 
//         fs.readFile(__dirname + "/db.json", function(error, response) {
//             if (error) throw error; 
           
//             var endNotes = JSON.parse(response); 
     
//             endNotes.push(userNote); 
        
//         fs.writeFile(__dirname + "/db.json", JSON.stringify(endNotes, null, 2), error => {
//             if (error) throw error; 
//             res.send(dbFile); 
//         });
//     }); 
// }); 

//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
    app.delete("/api/notes/:id"), function(req, res) {

    }

    app.post("/api/clear", function(req, res) {
        res.json({OK: TRUE}); 
    });
};

// app.delete("/api/notes/:id", (req, res) => {

//     let noteId = req.params.id;

//     fs.readFile("./db/db.json", "utf8", (err, data) => {
//       if (err) throw err;

//       const allNotes = JSON.parse(data);
//       const newAllNotes = allNotes.filter(note => note.id != noteId);

//       fs.writeFile("./db/db.json", JSON.stringify(newAllNotes, null, 2), err => {
//         if (err) throw err;
//         res.send(db);
//         console.log("Note deleted!")
//       });
//     });
//   });
// };