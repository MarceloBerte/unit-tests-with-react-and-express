const Animals = require('../models/animals');

const AnimalsController = {
    get: async (req, res) => {

        const { name } = req.params;

        if (name) {
            const capitalizedNameString = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
            const filteredAnimal = await Animals.findOne({ where: { name: capitalizedNameString } })

            if (!filteredAnimal) {
                return res.status(404).send('Animal not found');
            }

            return res.json(filteredAnimal);
        }

        const animalsList = await Animals.findAll();

        return res.json(animalsList);
    }
};

module.exports = AnimalsController;
