var express = require('express');
var config = require('./config');
var createTables = require('./createTables');
var BaseController = require('./controller/baseController');
const router = express.Router();

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:4200');
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });

if (config.updateDatabase) {
    createTables.createTables();
}

//create here your routes

// var controller = new BaseController();

//router.get('/tableName', controller.findAll)
//router.get('/tableName/:id', controller.findById)
//router.post('/tableName', controller.insert)
// router.put('/tableName/:id', controller.update)
//router.delete('/tableName/:id', controller.delete)

app.use('/api', router);
module.exports = app;