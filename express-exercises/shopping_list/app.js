const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var list = ["apples", "milk", "bread"];

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.render('search', {list});
});

app.get('/search', function(req, res){
  res.send(req.query['keyword']);
});

app.get('/new-item', function(req, res) {
  res.render('new-item');
});

app.post('/add-item', function(req, res) {
  list.push(req.body['added-item']);
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000.');
});
