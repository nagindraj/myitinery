const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');
const connectToMongo = require('./database');
app.use(cors());
//connect to database
connectToMongo();
// apply the routes to our application
app.use('/', router);

app.listen(5000);