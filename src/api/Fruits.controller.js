const Fruits = require('../models/fruits');

const FruitsController = {
    get: async (req, res) => {

        const { name } = req.params;

        if (name) {
            const capitalizedNameString = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
            const filteredFruit = await Fruits.findOne({ where: { name: capitalizedNameString } })

            if (!filteredFruit) {
                return res.status(404).send('Fruit not found');
            }

            return res.json(filteredFruit);
        }

        const fruitsList = await Fruits.findAll();

        return res.json(fruitsList);
    }
};

module.exports = FruitsController;
