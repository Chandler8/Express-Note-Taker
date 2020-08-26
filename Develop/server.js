// First off we need to add our required libraries via npm install, then we need to require them below
const express = require("express");
const path = require("path");
const fs = require("fs");

// Initialize our express servers existence
const app = express();

// We set a port up for listening, 
// We allow the server (Heroku in this case) to set its own port, 
// But we allow it to default to 8080 if need be
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

let noteInfo = [];

// Execute API call, send the output to the browser

app.get("/api/notes", (err, res) => {
    try {
      noteInfo = fs.readFileSync("db/db.json", "utf8");
      // Use the parse method to ensure that it becomes an array
      noteInfo = JSON.parse(noteInfo);
  
    } catch (err) {
      console.log(err);
    }
    // Check the response
    console.log("GET request successful");
    res.json(noteInfo);
  });
  
  app.post("/api/notes", function(req, res) {
    try {
      // Need to read the file from our directory 
      noteInfo = fs.readFileSync("db/db.json", "utf8");
      console.log(noteInfo);
  
      // Parse to get an array
      noteInfo = JSON.parse(noteInfo);
      req.body.id = noteInfo.length;

      // Push the new note to your array
      noteInfo.push(req.body);

      // Use stringify method to be able to publish to it
      noteInfo = JSON.stringify(noteInfo);

      // Publish new file
      fs.writeFile("db/db.json", noteInfo, "utf8", function(err) {
        if (err) throw err;
      });

      // Use JSON to change the content back into ojects that the browser can then interpret 
      console.log("POST request successful");
      res.json(JSON.parse(noteInfo));
  
    } catch (err) {
      throw err;
    }
  });

  // Initialize Server
  app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
  });

