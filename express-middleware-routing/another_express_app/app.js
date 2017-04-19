const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res, next) {
  res.render('index');
});

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
