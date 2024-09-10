const http = require("http");
const fs= require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("BWelcome To The Homepage!");
    res.end();
  } else if (req.url === "/About") {
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        nav a {
            margin: 0 15px;
            text-decoration: none;
            color: #333;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>About Us</h1>
    <p>We are passionate about creating beautiful and functional websites.</p>
    
    <nav>
        <a href="Homepage.html">Home</a>
        <a href="About.html">About</a>
        <a href="Contact.html">Contact</a>
    </nav>
</body>
</html>`);
    res.end();
  } else if (req.url === "/Contact") {
    res.write("Contact");
    res.end();
  }
    else if (req.url === "/login") {
        if(req.method === "POST") {
            res.write("login");
            res.end();
        }
  } else {
    res.write("page does not exsist");
    res.end();
  }
});

server.listen(3000);

console.log("Listening to on port 3000");
