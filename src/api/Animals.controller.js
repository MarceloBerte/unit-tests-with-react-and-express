const animalsList = [
    { name: 'Cat' },
    { name: 'Dog' },
    { name: 'Bird' }
];

const AnimalsController = {
    get: (req, res) => {

        const {name} = req.params;

        if(name) {
            const filteredAnimal = animalsList.filter(animal => animal.name.toLocaleLowerCase() === name);

            if(!filteredAnimal.length) {
                return res.status(404).send('Animal not found');
            }

            return res.json(filteredAnimal);
        }

        return res.json(animalsList);
    }
};

module.exports = AnimalsController;
