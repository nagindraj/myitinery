const express = require('express');
const app = express();
const router = require('./routes');

// apply the routes to our application
app.use('/', router);
 
app.listen(5000);