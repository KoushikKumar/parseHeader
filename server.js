'use strict';
var express = require("express"),
    routes = require(process.cwd()+'/app/routes/index.js'),
    requestLanguage = require('express-request-language'),
    cookieParser = require('cookie-parser');

var app = express();
var port = process.env.PORT || 8080;
app.use(cookieParser());
app.use(requestLanguage({
  languages: ['en-US', 'zh-CN'],
  cookie: {
    name: 'language',
    options: { maxAge: 24*3600*1000 },
    url: '/languages/{language}'
  }
}));

routes(app);
app.listen(port,function(){
  console.log('listening to '+ port);
});