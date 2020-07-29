var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
    res.render('member/employee.ejs');
});

router.post('/',function(req, res){

    res.render('member/employee.ejs');

});

module.exports = router;