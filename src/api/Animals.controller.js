const Animals = require('../models/animals');

const { getData, createData, updateData, deleteData } = require('./_helpers');

const AnimalsController = {
    get: async (req, res) => await getData(req, res, Animals),
    post: async (req, res) => await createData(req, res, Animals),
    update: async (req, res) => await updateData(req, res, Animals),
    delete: async (req, res) => await deleteData(req, res, Animals)
};

module.exports = AnimalsController;
