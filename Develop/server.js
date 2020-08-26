// First off we need to add our required libraries via npm install, then we need to require them below
const express = require("express");
const path = require("path");
const fs = require("fs");

// Initialize our express server
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
  