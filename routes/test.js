        // app.get("/api/notes/id", function(req, res) {
        //     let userNote = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        //     //'./db/db.json', 'utf8'
        //     res.json(userNote[Number(req.params.id)]);
        // });

//////////////////////////////////////////-----------------------------------------------------------------------

// app.delete("/api/notes/:id", (req, res) => {
//     fs.readFileSync(__dirname, "./db/db.json", function (error, response) {
//         var id = req.params.id;
//         delete db [id -1]; 
//         dbNew(db); 
//         response.send(db); 

//     })
    
//     fs.writeFile(__dirname + "./db/db.json", function (error) {
//         if (error) throw error;
//          res.end(console.log('deleted'));      
//     });
// })};

// app.delete("/api/notes/:id", (req, res) => {
//     var id = req.params.id;
//     // let x = 1;
//     delete db[id - 1];
//     dbNew(db);
//     res.send(db);
//     });
        
// };


// var dbNew = db => {
//     fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'),
//     fs.writeFileSync(path.join(__dirname, '../Develop/db/db.json'), 
//     JSON.stringify(db))); error => {
//         if (error) throw error;}
// }; 


    //DELETE REQUEST: Should receive a query parameter containing the id of a note to delete. 

    // app.delete('/api/notes/:id', (request, response) => {

    //     fs.readFile('/Develop/db/db.json',(error, data) => {
    //       var deleteId = request.params.id;
    //       var jsonData = JSON.parse(data);
          
      
    //     fs.writeFile('/Develop/db/db.json', JSON.stringify(json), (error) => {
    //         response.send('Status Deleted---OK');
    //         });
    //     });
    // })