var express = require('express');
var express = require('express');
var bodyParser = require('body-parser');

var login = require('./controller/login');
var home = require('./controller/home');

var app = express();

//config
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser());
app.use('/login',login);
app.use('/home',home);
//app.use('/',home);

//Router
app.get('/', function (req, res){
    res.send();
});

app.listen(3000,function(){
    console.log('express http server started at 3000')
});