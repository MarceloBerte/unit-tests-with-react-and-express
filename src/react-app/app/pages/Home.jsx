import React, { useEffect } from 'react';

import { useAnimals } from '../hooks/animals';
import { useFruits } from '../hooks/fruits';
import { getAnimals } from '../services/animals';
import { getFruits } from '../services/fruits';

import AnimalsComponent from '../components/Animals.jsx';
import FruitsComponent from '../components/Fruits.jsx';

const HomePage = () => {

    const {animals, getAnimalsAndUpdateState} = useAnimals();
    const {fruits, getFruitsAndUpdateState} = useFruits();

    useEffect(() => { 
        getAnimalsAndUpdateState(getAnimals());
        getFruitsAndUpdateState(getFruits());
    }, []);

    return (
        <>
            <AnimalsComponent data={animals} />
            <FruitsComponent data={fruits} />
        </>
    );
}
 
export default HomePage;
