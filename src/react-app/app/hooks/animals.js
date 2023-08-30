import { useState } from 'react';

export const useAnimals = () => {

    const [animals, setAnimals] = useState([]);

    const getAnimalsAndUpdateState = async (fn) => {
        const animals = await fn;
        setAnimals(animals);
    };

    return {
        animals,
        getAnimalsAndUpdateState
    };
};
