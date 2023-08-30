const Request = require("supertest");
const App = require('../App');

// const searchForAnimal = async (animal, statusCode) => {
//     const response = await Request(App).get(`/api/animals/${animal}`).expect(statusCode);
//     return expect(response.statusCode).toBe(statusCode);        
// };

// API REQUEST TESTS

// describe('Animals', () => {
//     it('Should return 200 fetching all animals', () => {
//         return searchForAnimal('', 200);
//     });

//     it('Should return 200 searching for "Cat"', () => {
//         return searchForAnimal('cat', 200);
//     });
    
//     it('Should return 200 searching for "Dog"', () => {
//         return searchForAnimal('dog', 200);
//     });
    
//     it('Should return 200 searching for "Bird"', () => {
//         return searchForAnimal('bird', 200);
//     });
    
//     it('Should return 404 searching for "Horse"', () => {
//         return searchForAnimal('horse', 404);
//     });
// });

describe.each([
    { query: '', expected: 200 },
    { query: 'cat', expected: 200 },
    { query: 'dog', expected: 200 },
    { query: 'bird', expected: 200 },
    { query: 'horse', expected: 404 }
])('Animals', ({query, expected}) => {
    it(`Should return ${expected} searching for "${query}"`, async () => {
        const response = await Request(App).get(`/api/animals/${query}`);
        expect(response.statusCode).toBe(expected);   
    });
});
