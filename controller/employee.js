var express = require('express');
var router = express.Router();

var emp={
    id:1,
    name:'Bob',
    phone:'1234567890',
    address:'England',
    gender:'Male',
    designation:'Engineer'
}

// ROOT
router.get('/', function(req, res){
    res.render('member/employee.ejs');
});

router.post('/',function(req, res){
    if(req.body.empAction == 'My Profile'){
        res.redirect('/employee/myprofile');
    }
    else if(req.body.empAction == 'Update Profile'){
        res.redirect('/employee/updateprofile');
    }
});


module.exports = router;