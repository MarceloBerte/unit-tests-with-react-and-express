import { useState } from 'react';

import { getAnimals } from '../services/animals';

export const useAnimals = () => {

    const [animals, setAnimals] = useState([]);

    const getAnimalsAndUpdateState = async () => {
        const animals = await getAnimals();
        setAnimals(animals);
    };

    return {
        animals,
        getAnimalsAndUpdateState
    };
};
