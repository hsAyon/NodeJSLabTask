var express = require('express');
var router = express.Router();

var emp1={
    id:1,
    name:'Bob',
    phone:'1234567890',
    address:'England',
    gender:'Male',
    designation:'Engineer'
}
var emp2={
    id:2,
    name:'Megan',
    phone:'0987654321',
    address:'USA',
    gender:'Female',
    designation:'Assistant'
}
// ROOT
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

// ADDEMPLOYEE
router.get('/addemployee', function(req, res){
    res.render('member/addEmp.ejs');
});

router.post('/addemployee', function(req, res){
    res.send('Employee Added');
});

// ALLEMPLOYEELIST
router.get('/allemployeelist', function(req, res){
    var data ={
        m1:emp1,
        m2:emp2
    }
    res.render('member/empList.ejs',data);
});

router.post('/allemployeelist', function(req, res){
    //res.send('Employee Added');
});

// UPDATE
router.get('/update/:id', function(req, res){
    if(req.params.id == '1'){
        data=emp1;
    }
    else if(req.params.id == '2'){
        data=emp2;
    }
    res.render('member/update.ejs',data);
});

router.post('/allemployeelist', function(req, res){
    res.send('Employee Updated');
});


module.exports = router;