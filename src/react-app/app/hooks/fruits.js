import { useState } from 'react';

export const useFruits = () => {

    const [fruits, setFruits] = useState([]);

    const getFruitsAndUpdateState = async (getFruitsFunction) => {
        const fruits = await getFruitsFunction;
        setFruits(fruits);
    };

    return {
        fruits,
        getFruitsAndUpdateState
    };
};
