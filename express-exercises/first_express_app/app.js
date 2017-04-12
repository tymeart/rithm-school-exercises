var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/instructor/:first_name', function(request, response) {
  response.send(`The name of this instructor is ${request.params.first_name}.`);
});

app.listen(3000, function() {
  console.log('The server has started on port 3000. Head to localhost:3000 in the browser and see what\'s there!');
});
