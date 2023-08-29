const fruitsList = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Strawberry' }
];

const FruitsController = {
    get: (req, res) => {

        const {name} = req.params;

        if(name) {
            const filteredFruit = fruitsList.filter(fruit => fruit.name.toLocaleLowerCase() === name);

            if(!filteredFruit.length) {
                return res.status(404).send('Fruit not found');
            }

            return res.json(filteredFruit);
        }

        return res.json(fruitsList);
    }
};

module.exports = FruitsController;
