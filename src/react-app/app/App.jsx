import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home.jsx';
import NewAnimalPage from './pages/NewAnimal.jsx';
import NewFruitPage from './pages/NewFruit.jsx';

import ROUTES from './routes-constants.js';

const App = () => {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.NEW_ANIMAL} element={<NewAnimalPage />} />
                <Route path={ROUTES.NEW_FRUIT} element={<NewFruitPage />} />
            </Routes>
        </HashRouter>
    );
}
 
export default App;
