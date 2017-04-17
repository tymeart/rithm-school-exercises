const express = require('express');
const app = express();

var list = ["apples", "milk", "bread"];

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('search', {list});
});

app.get('/search', function(req, res){
  res.send(req.query);
});

app.get('/new-item', function(req, res) {

});

app.post('/add-item', function() {

});

app.listen(3000, function() {
  console.log('Server is running on port 3000.');
});
