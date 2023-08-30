const Request = require("supertest");
const App = require('../App');

// const searchForFruit = async (fruit, statusCode) => {
//     const response = await Request(App).get(`/api/fruits/${fruit}`).expect(statusCode);
//     return expect(response.statusCode).toBe(statusCode);        
// };

// API REQUEST TESTS

// describe('Fruits', () => {
//     it('Should return 200 fetching all fruits', () => {
//         return searchForFruit('', 200);
//     });

//     it('Should return 200 searching for "Apple"', () => {
//         return searchForFruit('apple', 200);
//     });
    
//     it('Should return 200 searching for "Banana"', () => {
//         return searchForFruit('banana', 200);
//     });
    
//     it('Should return 200 searching for "Strawberry"', () => {
//         return searchForFruit('strawberry', 200);
//     });
    
//     it('Should return 404 searching for "Grape"', () => {
//         return searchForFruit('grape', 404);
//     });
// });

describe.each([
    { query: '', expected: 200 },
    { query: 'apple', expected: 200 },
    { query: 'banana', expected: 200 },
    { query: 'strawberry', expected: 200 },
    { query: 'grape', expected: 404 },
])('Fruits', ({query, expected}) => {
    it(`Should return ${expected} searching for "${query}"`, async () => {
        const response = await Request(App).get(`/api/fruits/${query}`);
        expect(response.statusCode).toBe(expected);
    });
});
