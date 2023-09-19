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

const updateData = async (req, res, model) => {

    const { name } = req.params;
    const { newName } = req.body;

    if (!name || !newName) {
        return res.status(500).send('Missing parameters');
    }

    const capitalizedNameString = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    const item = await model.findOne({ where: { name: capitalizedNameString } });

    if (!item) {
        return res.status(404).send('Not found');
    }

    const newItem = await item.update({ name: newName });

    return res.status(200).json(newItem);
};

const deleteData = async (req, res, model) => {

    const { name } = req.params;

    if (!name) {
        return res.status(500).send('Missing parameters');
    }

    const capitalizedNameString = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    const item = await model.findOne({ where: { name: capitalizedNameString } });

    if (!item) {
        return res.status(404).send('Not found');
    }

    await item.destroy();

    return res.status(200).json(item);
}

module.exports = { getData, createData, updateData, deleteData };
