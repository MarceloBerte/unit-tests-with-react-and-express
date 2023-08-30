import { useState } from 'react';

export const useFruits = () => {

    const [fruits, setFruits] = useState([]);

    const getFruitsAndUpdateState = async (fn) => {
        const fruits = await fn;
        setFruits(fruits);
    };

    return {
        fruits,
        getFruitsAndUpdateState
    };
};
