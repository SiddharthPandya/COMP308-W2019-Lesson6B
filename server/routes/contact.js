let express = require('express');
let router = express.Router();

// create a reference to the database schema
let contactModel = require('../models/contact');

let contactController = require('../controllers/contact');

/* GET Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

/* GET Route for the Add page
   this will display the Add Page */
router.get('/add', contactController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', contactController.processAddPage);

/* GET request - display the edit page */
router.get('/edit/:id', contactController.displayEditPage);

/* POST request - Update the database with data from the database */
router.post('/edit/:id', contactController.processEditPage);

/* GET request to perform delete */
router.get('/delete/:id', contactController.performingDelete);

module.exports = router;