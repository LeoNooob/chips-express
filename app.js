var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
var loginRouter = require('./routes/login');
var sqlRouter = require('./routes/mysql');

var vertoken = require('./public/javascripts/token_vertify.js')
var expressJwt = require('express-jwt')
  
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// 解析token获取用户信息
app.use(function(req, res, next) {
  var token = req.headers['authorization'];
  if(token == undefined){
      return next();
  }else{
      vertoken.verToken(token).then((data)=> {
          req.data = data;
          return next();
      }).catch((error)=>{
          return next();
      })
  }
});

app.use(expressJwt({
  secret: 'mes_qdhd_mobile_xhykjyxgs',
  algorithms: ['HS256']
}).unless({
  path: ['/login']      //不需要token的url
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/login', loginRouter);
app.use('/mysql', sqlRouter);

app.use(function(err, req, res, next) {
  if (err.status == 401) {
      return res.status(401).send('token失效');
  }
});

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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
