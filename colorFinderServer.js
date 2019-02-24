const express = require('express'); // create our express server object

const Algorithmia = require("algorithmia"); // create our Algorithmia object

const app = express(); // create an instance of the express server

// this declares the post function for a /process image request
app.post('/processImage', function(req,res) {
  var fileName = "https://images.yoox.com/38/38712568ca_12_f.jpg"
  var input = [fileName,4];
  Algorithmia.client("sim9twJ1Nup3rIDpswPxmC7eALe1")
    .algo("opencv/ColorsFromImage/0.1.0")
    .pipe(input)
    .then(function(response) {
        res.send(response);
    });
});

// Start the server
const PORT = process.env.PORT || 6969;

// This listens to the port and picks up requests
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
