var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var ExpressSession = require('express-session');
var RedisStore = require('connect-redis')(ExpressSession);

var routes = require('./routes/index');
var users = require('./routes/users');

var db = require('./models/mysql/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//var redis = require('./db/redis').init(),
  var   config = require('./config/index');

app.use(ExpressSession({
  resave: false,
  saveUninitialized: true,
  store: new RedisStore({host:config.redis.host,port:config.redis.port}),
  rolling: true,
  secret: 'disan-2015',
  cookie: {
    maxAge: 1000*60*60*24*7
  }   
}));

app.use('/', require('./routes/question'));
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

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
