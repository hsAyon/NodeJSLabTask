var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
    res.render('login/login.ejs');
});

router.post('/',function(req, res){

    console.log(req.body);

    if(req.body.name == req.body.password && req.body.name == 'admin'){
        console.log('Admin logged in');
        res.redirect('/admin');
    }
    else if(req.body.name == req.body.password && req.body.name == 'employee'){
        console.log('Employee logged in');
        res.redirect('/employee');
    }
    else{
        res.send('Invalid login');
    }

});

module.exports = router;