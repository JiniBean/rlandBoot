const express = require('express');

const ejs = require('ejs');
const path = require('path');
const server = express();
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname, "public")));


const server = express();

server.listen(80);

server
    .route('/index')
    .get((req, res) => {
        res.render("index.ejs", {test:"Hello"});

    });
// server.use('/index', (req, res) => {
//
// });