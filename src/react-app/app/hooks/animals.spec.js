import { renderHook, act } from '@testing-library/react';

import { useAnimals } from './animals';

const getAnimals = jest.fn(() => {
    return Promise.resolve([
        { name: 'Cat' },
        { name: 'Dog' },
        { name: 'Bird' }
    ]);
});

describe('Custom Hooks', () => {
    describe('animals.js | useAnimals', () => {
          
        it('Should call getAnimalsAndUpdateState function and update animals state', async () => {
            const { result } = renderHook(useAnimals);

            await act(() => result.current.getAnimalsAndUpdateState(getAnimals()));

            expect((result.current.animals).length).toBe(3);
        });
    });
});
