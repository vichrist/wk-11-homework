// const { text } = require("body-parser");
// var dbFile = require('../Develop/db/db.json');
// var fs = require("fs");
// var path = require("path");

// module.exports = function(app) { 
   
//     //    * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON. 
//         app.get('/api/notes', function(req, res) {
//             res.send(dbFile); 
//             console.log("notes");
//         }); 
// //////////////////////////////////////////-----------------------------------------------------------------------
//         // app.get("/api/notes/id", function(req, res) {
//         //     let userNote = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//         //     //'./db/db.json', 'utf8'
//         //     res.json(userNote[Number(req.params.id)]);
//         // });
// //////////////////////////////////////////-----------------------------------------------------------------------

//         app.post("/api/notes", function(req, res) {
//             var userNote = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
      
//             var newNote = req.body; 
//             var userID = (userNote.length).toString(); 
//             newNote.id = userNote; 
//             userNote.push(newNote); 
//             console.log(req);   
        
//         fs.writeFileSync("../Develop/db/db.json", JSON.stringify(userNote), function (error) {
//             if (error) throw (error);
//         }); 
//             res.json(userNote);    
//         }); 
// //////////////////////////////////////////-----------------------------------------------------------------------

//         app.delete("/api/notes/:id", (req, res) => {

//             var userNote = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
//             // './db/db.json', 'utf8'
//             var newNote = req.params.id; 
//             var userID = 0; 
//             console.log("Successfully Deleted");
//             userNote = userNote.filter(currNote => {
//                 return currNote.id != newNote; 
//             });

//             for (currNote of userNote) {
//                 currNote.id = userID.toString();
//                 userID++; 
//             }
                
//         fs.writeFile("./db/db.json", JSON.stringify(userNote));
//         //'./db/db.json', 'utf8'
//         res.json(userNote); 
//             // if (err) throw err;
//             // res.send(db);
//             // console.log("Note deleted!");
//         })     

// //////////////////////////////////////////-----------------------------------------------------------------------

// };  


    









































// module.exports = function(app) {

//     app.post("/api/notes", function(req, res) { 
        
//         let userNote = {
//             // id: ""
//             title: req.body.title,
//             text: req.body.text
//         };

//         fs.readFile(__dirname + "/db.json", function(error, data) {
//             if (error) throw error   ; 

//             var responseNotes = JSON.parse(data); 
     
//             responseNotes.push(userNote); 
        
//         fs.writeFile(__dirname + "/db.json", JSON.stringify(responseNotes, null, 2), error => {
//             if (error) throw error; 
//             res.send(dbFile); 
//             console.log("New Note Generated")
//         });
//     }); 
// }); 
// };

// // including the path package so that we can locate the correct file path for HTML 

// var dbFile = require('../Develop/db/db.json')

// //   * DELETE `/api/notes/id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
//     app.delete("/api/notes/id"), function(req, res) {
//         fs.readFile(__dirname + "/db.json", function(error, response) {
//             var userId = req.params.id; 
//             var userData = JSON.parse(response);
//             userData = userData.filter(function(newNote){
//                 if (userId != user.id) {
//                     return true; 
//                 } else {
//                     return false; 
//                 };
//         });
//     fs.writeFile(__dirname + '/db.json', JSON.stringify(userData), function (error) {
//         if (error) throw error;
//         res.end(console.log('deleted'));
//     })
   
// });
// }};