import React from 'react';
import { useNavigate } from 'react-router-dom';

import AddItemFormComponent from '../components/forms/AddItemForm.jsx';

import { createFruit } from '../services/fruits.js';

import ROUTES from '../routes-constants.js';

const NewFruitPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <h3>New Fruit</h3>
            <AddItemFormComponent createFunction={createFruit} onSuccess={() => navigate(ROUTES.LINKS.HOME)} />
        </>
    );
}
 
export default NewFruitPage;
