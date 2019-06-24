const express = require('express');

//get the router instance
const router = express.Router();
let citiesModel = require('./models/city');
let itineraryModel = require('./models/Itinerary');
let activityModel = require('./models/activity');
// router.get('/', function (req, res) {
//   res.send('Heyooo');
// });

// router.get('/test', function (req, res) {
//   res.send('Hello World');
// });

router.get('/cities', (req, res) => {
    citiesModel.find({}).sort({name: 1}).then((data) => { 
      res.json(data);
  });
});

router.get('/itineraries/:city', (req, res) => {
  let city = req.params.city;
    itineraryModel.find({city: city}).then((data) => {
      res.json(data);
    });
  
});

router.get('/activities/:userId', (req, res) => {
    let userId = req.params.userId;
    activityModel.find({userId: userId}).then((data) => {
      res.json(data);
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

