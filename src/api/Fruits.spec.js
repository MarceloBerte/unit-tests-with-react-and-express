const Request = require("supertest");
const App = require('../App');

describe.each([
    // GET
    { message: 'Should return 200 retrieving all Fruits', query: ' ', expected: 200, method: 'get' },
    { message: 'Should return 200 searching for "apple"', query: 'apple', expected: 200, method: 'get' },
    { message: 'Should return 200 searching for "banana"', query: 'banana', expected: 200, method: 'get' },
    { message: 'Should return 200 searching for "strawberry"', query: 'strawberry', expected: 200, method: 'get' },
    { message: 'Should return 200 searching for "grape"', query: 'grape', expected: 404, method: 'get' },
    // POST
    { message: 'Should be possible to insert a new Fruit into database', payload: { name: 'Pear' }, expected: 201 },
    { message: 'Should not be possible to insert a new Fruit if it already exists in database', payload: { name: 'Apple' }, expected: 409 },
    // DELETE
    { message: 'Should be possible to delete an Fruit from database', query: 'banana', expected: 200, method: 'delete' },
    { message: 'Should throw 404 error trying to delete an Fruit that isn\'t in database', query: 'orange', expected: 404, method: 'delete' },
])('Fruits', ({ message, payload, expected, query, method }) => {
    it(message, async () => {
        let response;
        if (payload) {
            response = await Request(App).post('/api/fruits').send(payload);
        }
        if (query) {
            response = await Request(App)[method](`/api/fruits/${query}`);
        }
        expect(response.statusCode).toBe(expected);
    });
});
