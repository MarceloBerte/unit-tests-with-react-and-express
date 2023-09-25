import React from 'react';
import { useNavigate } from 'react-router-dom';

import AddItemFormComponent from '../components/forms/AddItemForm.jsx';

import { createAnimal } from '../services/animals.js';

import ROUTES from '../routes-constants.js';

const NewAnimalPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <h3>New Animal</h3>
            <AddItemFormComponent createFunction={createAnimal} onSuccess={() => navigate(ROUTES.LINKS.HOME)} />
        </>
    );
}
 
export default NewAnimalPage;
