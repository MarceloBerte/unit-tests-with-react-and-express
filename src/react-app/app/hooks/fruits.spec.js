import { renderHook, act } from '@testing-library/react';

import { useFruits } from './fruits';

// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve([
//             { name: 'Apple' },
//             { name: 'Banana' },
//             { name: 'Strawberry' }
//         ]),
//     })
// );

const getFruits = jest.fn(() => {
    return Promise.resolve([
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Strawberry' }
    ]);
});

describe('Custom Hooks', () => {
    describe('fruits.js | useFruits', () => {

        // afterEach(fetch.mockClear());
          
        it('Should call getFruitsAndUpdateState function and update fruits state', async () => {
            const { result } = renderHook(useFruits);

            // await act(() => result.current.getFruitsAndUpdateState());
            
            await act(() => result.current.getFruitsAndUpdateState(getFruits()));

            expect((result.current.fruits).length).toBe(3);
        });
    });
});
