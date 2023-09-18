const getData = async (req, res, model) => {

    const { name } = req.params;

    if (name) {
        const capitalizedNameString = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
        const filteredItem = await model.findOne({ where: { name: capitalizedNameString } });

        if (!filteredItem) {
            return res.status(404).send('Not found');
        }

        return res.status(200).json(filteredItem);
    }

    const itemList = await model.findAll();

    return res.status(200).json(itemList);
};

const createData = async (req, res, model) => {

    const { name } = req.body;

    if (!name) {
        return res.status(500).send('Missing parameters');
    }

    const item = await model.findOne({ where: { name: name } });

    if (item) {
        return res.status(409).send('Already exists');
    }

    const newItem = await model.create({ name: name });

    return res.status(201).json(newItem);
};

module.exports = { getData, createData };
