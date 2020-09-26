var path = require("path"); // pull in path dependency 

// get request to return the notes.html file 

module.exports = ((app) => {
  app.get("/notes", ((req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  }))

 // get request that will return the index.html file 
  app.get("*", ((req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  }))
});
