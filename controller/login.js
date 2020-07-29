var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
    res.render('login/index.ejs');
});

router.post('/',function(req, res){

    console.log(req.body);

    if(req.body.name == req.body.password){
        res.redirect('/home');
    }
    else{
        res.send('invalid');
    }

});

module.exports = router;