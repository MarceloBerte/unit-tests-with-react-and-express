const Express = require('express');

const AnimalsController = require('./Animals.controller');

const Animals = Express.Router();

Animals.get('/animals', AnimalsController.get);
Animals.get('/animals/:name', AnimalsController.get);

module.exports = Animals;