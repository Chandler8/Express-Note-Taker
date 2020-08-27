# Express-Note-Taker

# Employee Template Generator

![License](https://img.shields.io/badge/License-MIT-blueviolet.svg)

The following is a web application that will allow for users to create unique notes that they will then be able to save and delete accordingly. Users are also able to create as many new notes as they would like while still being able to access the previously created notes. Technologies used to create this app include; HTML, CSS, Node.js, Express.js, JSON, and more. This app can be found deployed via Heroku at the following link:

## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The application frontend has already been created, it's your job to build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story

```
AS A user, I want to be able to write and save notes
I WANT to be able to delete notes I've written before
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Table of Contents


* [License](#license)
* [Questions](#questions)
* [Contributors](#contributors)
* [Images](#images)

# License

Application working under an MIT license

# Questions

Reach out to me via email regarding any questions or concerns with this project:
- chandler.lowrance1@gmail.com


# Contributors

| Chandler
------------ 

[<img src="https://avatars0.githubusercontent.com/u/65209786?s=400&u=cb17a056cc6e4ab1216a4b19a6d190d5a6727651&v=4" width="100px;"/><br /><sub><b>Chandler Lowrance</b></sub>](https://github.com/Chandler8)<br />[💻](https://github.com/Chandler8?tab=repositories "Repositories")

# Media

![](Images/screen1.JPG)