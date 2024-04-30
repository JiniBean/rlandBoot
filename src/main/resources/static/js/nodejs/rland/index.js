const express = require('express');
<<<<<<< HEAD
const ejs = require('ejs');
const path = require('path');
const server = express();
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname, "public")));
=======

const server = express();
>>>>>>> origin/main
server.listen(80);

server
    .route('/index')
    .get((req, res) => {
<<<<<<< HEAD
        res.render("index.ejs", {test:"Hello"});
=======
>>>>>>> origin/main

    });
// server.use('/index', (req, res) => {
//
// });