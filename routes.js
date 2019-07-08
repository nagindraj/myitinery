const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('./config');

//get the router instance
const router = express.Router();
let citiesModel = require('./models/city');
let itineraryModel = require('./models/Itinerary');
let activityModel = require('./models/activity');
let userModel = require('./models/register');

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

router.post('/register', (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  console.log('>>>>>', hashedPassword);
  userModel.create({
    name : req.body.fname+req.body.lname,
    email : req.body.email,
    password : hashedPassword,
    country: req.body.country
  },
  function (err, user) {
    if (err) {
      return res.status(500).json({message: "User is already registered"})
    }
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.json({ auth: true, token: token, message: 'Added Successfully' });
  }); 
});

router.get('/me', function(req, res) {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    res.status(200).send(decoded);
  });
});


router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  userModel.findOne({email: username}).then((data) => {
    if(data === null) {
      return res.json({message: "Username or password is wrong", loggedIn: false, url: ''})
    }
    const loggedIn = bcrypt.compareSync(password, data.password);
    if(!loggedIn) {
      res.json({message: "Username or password is wrong", loggedIn: false, url: ''});
    }
    res.json({message: "LoggedIn Successfully", loggedIn: true, url: '/cities'});
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

