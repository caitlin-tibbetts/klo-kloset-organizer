const express = require('express'); // create our express server object

const Algorithmia = require("algorithmia"); // create our Algorithmia object

const app = express(); // create an instance of the express server

// this declares the post function for a /process image request
app.post('/processImage', function(req,res) {
  var input = {
     "image": "https://images.yoox.com/38/38712568ca_12_f.jpg",
     "model":"small",
     "tags_only": true
  };

  Algorithmia.client("sim9twJ1Nup3rIDpswPxmC7eALe1")
      .algo("algorithmiahq/DeepFashion/1.3.0")
      .pipe(input)
      .then(function(response) {
          console.log(response.get());
      });

});

// Start the server
const PORT = process.env.PORT || 6969;

// This listens to the port and picks up requests
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
