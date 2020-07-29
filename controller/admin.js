var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
    res.render('member/admin.ejs');
});

router.post('/',function(req, res){
    if(req.body.adminAction == 'Add Employee'){
        res.redirect('/admin/addemployee');
    }
    else if(req.body.adminAction == 'All Employee List'){
        res.redirect('/admin/allemployeelist');
    }
});

module.exports = router;