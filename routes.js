const express = require('express');

//get the router instance
const router = express.Router();
let citiesModel = require('./models/city');
 
router.get('/', function (req, res) {
  res.send('Heyooo');
});

router.get('/test', function (req, res) {
  res.send('Hello World');
});

router.get('/cities', (req, res) => {
    citiesModel.find({}, (err, data) => { 
        res.json({cities: data});
    });
});

// route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next(); 
});


module.exports = router;

