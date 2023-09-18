const Express = require('express');

const FruitsController = require('./Fruits.controller');

const Fruits = Express.Router();

Fruits.get('/fruits', FruitsController.get);
Fruits.get('/fruits/:name', FruitsController.get);

Fruits.post('/fruits', FruitsController.post);

module.exports = Fruits;
