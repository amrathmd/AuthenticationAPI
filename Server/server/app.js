const path = require('path');
const express = require('express');
const logger = require('morgan')('dev');
const app = express();
const appDir = require('fs').realpathSync(process.cwd());
const mongoose=require('mongoose');
const router=require('./router/api/index');
const cors=require('cors');

console.log('Project root directory: ', appDir);

app.use(cors());
app.use(logger); 
app.use(express.json()); 
app.use('/api',router);


module.exports = app;
