const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');
const connectToMongo = require('./database');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//connect to database
connectToMongo();
// apply the routes to our application
app.use('/', router);

app.listen(5000);