import { useState } from 'react';

export const useAnimals = () => {

    const [animals, setAnimals] = useState([]);

    const getAnimalsAndUpdateState = async (getAnimalsFunction) => {
        const animals = await getAnimalsFunction;
        setAnimals(animals);
    };

    return {
        animals,
        getAnimalsAndUpdateState
    };
};
