var http = require("http");
var fs = require("fs");
var path = require("path");

http
  .createServer(function (req, res) {
    if (req.url === "/index" || req.url === "/") {
      fs.readFile(
        path.join(__dirname, "html", "index.html"),
        function (err, data) {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("500 Internal Server Error");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
        }
      );
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(_dirname, "html", "about.html"),
        function (err, data) {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("500 Internal Server Error");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
        }
      );
    } else if (req.url === "/contact") {
      fs.readFile(
        path.join(__dirname, "html", "contact-me.html"),
        function (err, data) {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("500 Internal Server Error");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
        }
      );
    } else {
      fs.readFile(
        path.join(__dirname, "html", "404.html"),
        function (err, data) {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("500 Internal Server Error");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
        }
      );
    }
  })
  .listen(8080);
