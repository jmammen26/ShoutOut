var express = require('express');
shoutOut= require('./routes/shoutOut');
users=require('./routes/users')
var mongoose=require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
mongoose.connect('');





// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


//store user
app.post('/postUser/:username/:momentum/:registrationId/:caves/:shoutOutIds/:ofObjectId',users.postUser);
//retrieve user
app.get('getUser/:username', users.getUser);
//store Cave
app.post('postCave/:caveId/:userList/:isPrivate/:ofObjectId',caves.postCave);
//retrieve Cave
app.get('getCave/:caveId',cave.getCave);
//storing shoutOut in DB
app.post('/postShoutOut/:id/:from/:to/:text/:ofObjectId', shoutOut.postShoutOut);
//getting all associated ShoutOuts from DB
app.get('/getAllShoutOuts/:username/:nameOfBusiness', shoutOut.getAllShoutOuts);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

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


module.exports = app;
