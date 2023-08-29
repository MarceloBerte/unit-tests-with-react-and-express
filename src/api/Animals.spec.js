const Request = require("supertest");
const App = require('../App');

const searchForAnimal = async (animal, statusCode) => {
    const response = await Request(App).get(`/api/animals/${animal}`).expect(statusCode);
    return expect(response.statusCode).toBe(statusCode);        
};

// API REQUEST TESTS

describe('Animals', () => {
    it('Should return 200 fetching all animals', () => {
        return searchForAnimal('', 200);
    });

    it('Should return 200 searching for "Cat"', () => {
        return searchForAnimal('cat', 200);
    });
    
    it('Should return 200 searching for "Dog"', () => {
        return searchForAnimal('dog', 200);
    });
    
    it('Should return 200 searching for "Bird"', () => {
        return searchForAnimal('bird', 200);
    });
    
    it('Should return 404 searching for "Horse"', () => {
        return searchForAnimal('horse', 404);
    });
});
