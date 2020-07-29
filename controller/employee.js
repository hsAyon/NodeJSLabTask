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
        res.redirect('employee/myprofile');
    }
    else if(req.body.empAction == 'Update Profile'){
        res.redirect('employee/updateprofile');
    }
});

// MYPROFILE
router.get('/myprofile', function(req, res){
    res.render('member/myprofile.ejs',emp);
});

router.post('/myprofile',function(req, res){
    res.render('member/myprofile.ejs',emp);
});

// UPDATEPROFILE
router.get('/updateprofile', function(req, res){
    res.render('member/update.ejs',emp);
});

router.post('/updateprofile',function(req, res){
    res.send('Profile Updated');
});

module.exports = router;