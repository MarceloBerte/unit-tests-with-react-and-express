import { useState } from 'react';

import { getFruits } from '../services/fruits';

export const useFruits = () => {

    const [fruits, setFruits] = useState([]);

    const getFruitsAndUpdateState = async () => {
        const fruits = await getFruits();
        setFruits(fruits);
    };

    return {
        fruits,
        getFruitsAndUpdateState
    };
};
