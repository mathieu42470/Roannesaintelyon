const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const users = require('./route/user')

app.use(bodyParser.json());
const corsOption ={
                origin: '*',
};

app.use(cors(corsOption));

app.use('/api/newsletter', users)

module.exports = app;