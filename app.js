var fs = require("fs");
var path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "html", "index.html"));
  fs.readFile(path.join(__dirname, "html", "index.html"), function (err, data) {
    if (err) {
      res.status(500).send("Error loading Home Page");
    } else {
      res.set("Content-Type", "text/html");
      res.send(data);
    }
  });
});

app.get("/about", (req, res) => {
  fs.readFile(path.join(__dirname, "html", "about.html"), function (err, data) {
    if (err) {
      res.status(500).send("Error loading About Page");
    } else {
      res.set("Content-Type", "text/html");
      res.send(data);
    }
  });
});

app.get("/contact", (req, res) => {
  fs.readFile(
    path.join(__dirname, "html", "contact.html"),
    function (err, data) {
      if (err) {
        res.status(500).send("Error loading Contact Page");
      } else {
        res.set("Content-Type", "text/html");
        res.send(data);
      }
    }
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
