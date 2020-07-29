var express = require('express');
var express = require('express');
var bodyParser = require('body-parser');

var login = require('./controller/login');
var admin = require('./controller/admin');
var employee = require('./controller/employee');



var app = express();

//config
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser());
app.use('/login',login);
app.use('/',login);
app.use('/admin',admin);
app.use('/employee',employee);

//Router
app.get('/', function (req, res){
    res.send();
});

app.listen(80,function(){
    console.log('express http server started at 80')
});