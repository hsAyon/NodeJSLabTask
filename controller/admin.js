var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
    res.render('member/admin.ejs');
});

router.post('/',function(req, res){

    res.render('member/admin.ejs');

});

module.exports = router;