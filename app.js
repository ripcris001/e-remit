const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');  
const fs = require('fs');
const app = express();
const config = require('./bin/config');
const templater = require('./library/template');
const routes = require('./bin/routes');
global.__system = {};
global.__dir = __dirname.replace(/(\/|\\)$/g,'');
global.__system.config = config;
global.__system.route = routes;
global.__system.template = templater({dir:global.__dir, template: config.template, assets: '/ASSETS'});

// view engine setup

app.set('view engine', 'ejs');
app.use(session({secret:config.server.session_secret, resave: false, saveUninitialized: false, cookie: {expires:(new Date(Date.now() + hour)), maxAge:hour}}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/ASSETS',express.static(path.join(__dirname, config.server.assets)));

// simple hmvc
const hmvc = require('./library/hmvc');
hmvc.init(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  // res.status(err.status || 500);
  if(err.status){
  	switch(err.status){
  		case 404:
  			res.json('error 404');
  		break;
  		case 403:
  			res.json('error 404');
  		break;
  		default:
  			res.json('unknown error');
  		break;
  	}
  }else{
  	next();
  }
});

module.exports = app;
