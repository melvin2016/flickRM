const express = require('express');
const Router = express.Router();
//require controllers
const indexCtrl = require('../controllers/index.controllers');

Router
  .route('/photos/search/:text')
  .get(indexCtrl.photoSearch);


module.exports=Router;
