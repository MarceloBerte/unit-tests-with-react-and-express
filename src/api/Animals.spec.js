const Request = require("supertest");
const App = require('../App');

describe.each([
    // GET
    { message: 'Should return 200 retrieving all Animals', query: ' ', expected: 200, method: 'get' },
    { message: 'Should return 200 searching for "cat"', query: 'cat', expected: 200, method: 'get' },
    { message: 'Should return 200 searching for "dog"', query: 'dog', expected: 200, method: 'get' },
    { message: 'Should return 200 searching for "bird"', query: 'bird', expected: 200, method: 'get' },
    { message: 'Should return 200 searching for "horse"', query: 'horse', expected: 404, method: 'get' },
    // POST
    { message: 'Should be possible to insert a new Animal into database', payload: { name: 'Chicken' }, expected: 201 },
    { message: 'Should not be possible to insert a new Animal if it already exists in database', payload: { name: 'Cat' }, expected: 409 },
    // DELETE
    { message: 'Should be possible to delete an Animal from database', query: 'Dog', expected: 200, method: 'delete' },
    { message: 'Should throw 404 error trying to delete an Animal that isn\'t in database', query: 'Horse', expected: 404, method: 'delete' },
])('Animals', ({ message, payload, expected, query, method }) => {
    it(message, async () => {
        let response;
        if (payload) {
            response = await Request(App).post('/api/animals').send(payload);
        }
        if (query) {
            response = await Request(App)[method](`/api/animals/${query}`);
        }
        expect(response.statusCode).toBe(expected);
    });
});
