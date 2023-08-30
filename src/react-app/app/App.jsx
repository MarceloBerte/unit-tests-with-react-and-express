import React, { useEffect } from 'react';

import { useAnimals } from './hooks/animals.js';
import { useFruits } from './hooks/fruits.js';

import AnimalsComponent from './components/Animals.jsx';
import FruitsComponent from './components/Fruits.jsx';

import { getAnimals } from './services/animals.js';
import { getFruits } from './services/fruits.js';

const App = () => {
    
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
 
export default App;
