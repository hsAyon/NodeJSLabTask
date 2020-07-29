var express = require('express');
var router = express.Router();

var emp1={
    id:1,
    name:'Bob',
    phone:'1234567890',
    adress:'England',
    gender:'Male',
    designation:'Engineer'
}
var emp2={
    id:2,
    name:'Megan',
    phone:'0987654321',
    adress:'USA',
    gender:'Female',
    designation:'Assistant'
}

router.get('/', function(req, res){
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

router.get('/addemployee', function(req, res){
    res.render('member/addEmp.ejs');
})

router.post('/addemployee', function(req, res){
    res.send('Employee Added');
})

module.exports = router;