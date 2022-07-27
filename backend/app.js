const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
const corsOption ={
               origin: '*',
};

app.use(cors(corsOption));

module.exports = app;