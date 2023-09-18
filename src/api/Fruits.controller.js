const Fruits = require('../models/fruits');

const { getData, createData } = require('./_helpers');

const FruitsController = {
    get: async (req, res) => await getData(req, res, Fruits),
    post: async (req, res) => await createData(req, res, Fruits)
};

module.exports = FruitsController;
