import { renderHook, act } from '@testing-library/react';

import { useFruits } from './fruits';

const getFruits = jest.fn(() => {
    return Promise.resolve([
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Strawberry' }
    ]);
});

describe('Custom Hooks', () => {
    describe('fruits.js | useFruits', () => {
          
        it('Should call getFruitsAndUpdateState function and update fruits state', async () => {
            const { result } = renderHook(useFruits);
            
            await act(() => result.current.getFruitsAndUpdateState(getFruits()));

            expect((result.current.fruits).length).toBe(3);
        });
    });
});
