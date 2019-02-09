let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the database schema
let contactModel = require('../models/contact');

/* GET Contact List page - READ Operation */
router.get('/', (req,res,next) =>{
    contactModel.find((err,contactList) => {
        if(err){
            return console.error(err);
        }
        else{
            //console.log(contactList);

            
            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });
            
        }
    });
});

/* GET Route for the Add page
   this will display the Add Page */
router.get('/add', (req,res,next) => {
    res.render('contacts/add', {
        title: 'Add New Contact'
    });
});

/* POST Route for processing the Add page */
router.post('/add',(req,res,next) =>{
    //console.log(req.body);

    let newContact = contactModel({
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "age":req.body.age
    });

    contactModel.create(newContact,(err, contactModel) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the contact list
            res.redirect('/contactList');
        }
    });

});

/* GET request - display the edit page */
router.get('/edit/:id', (req,res,next) => {
    let id = req.params.id

    //console.log(id);
    contactModel.findById(id, (err,contactObject) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //show the edit view
            res.render('contacts/edit',{
                title: 'Edit Contact',
                contact: contactObject
            });
        }
    });
});

/* POST request - Update the database with data from the database */
router.post('/edit/:id', (req,res,next) => {
    let id = req.params.id;

    let updatedContact = contactModel({
        "_id": id,
        "firstName": req.body.firstName,
        "lastName":req.body.lastName,
        "age":req.body.age
    });

    contactModel.update({_id:id}, updatedContact,(err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            // refresh the contact list
            res.redirect('/contactList');
        }
    });

});

/* GET request to perform delete */
router.get('/delete/:id', (req,res,next) => {
    let id = req.params.id;

    contactModel.remove({_id:id}, (err) => {
        if(err){
            console.log(err);

            res.end(err);
        }
        else{
            //refresh the contact list
            res.redirect('/contactList');
        }
    });
});

module.exports = router;