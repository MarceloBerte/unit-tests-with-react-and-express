const Animals = require('../models/animals');

const { getData, createData, deleteData } = require('./_helpers');

const AnimalsController = {
    get: async (req, res) => await getData(req, res, Animals),
    post: async (req, res) => await createData(req, res, Animals),
    delete: async (req, res) => await deleteData(req, res, Animals)
};

module.exports = AnimalsController;
