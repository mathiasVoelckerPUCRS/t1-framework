var express = require('express');
var config = require('./config.js');
var createTables = require('./createTables.js');
const router = express.Router();

const app = express();

if (config.updateDatabase) {
    createTables.createTables();
}

//create here your routes

// var controller = new BaseController();

//router.get('/tableName', controller.findAll)
//router.get('/tableName/:id', controller.findById)
//router.post('/tableName', controller.insert)
//router.put('/tableName/:id', controller.update)
//router.delete('/tableName/:id', controller.delete)

app.use('/api', router);
module.exports = app;