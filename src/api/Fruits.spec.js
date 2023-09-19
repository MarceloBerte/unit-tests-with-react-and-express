const Request = require("supertest");
const App = require('../App');

describe.each([
    { message: 'Should return 200 retrieving all Fruits', query: ' ', expected: 200 },
    { message: 'Should return 200 searching for "apple"', query: 'apple', expected: 200 },
    { message: 'Should return 200 searching for "banana"', query: 'banana', expected: 200 },
    { message: 'Should return 200 searching for "strawberry"', query: 'strawberry', expected: 200 },
    { message: 'Should return 200 searching for "grape"', query: 'grape', expected: 404 }
])('Fruits', ({ message, query, expected }) => {
    it(message, async () => {
        const response = await Request(App).get(`/api/fruits/${query}`);
        expect(response.statusCode).toBe(expected);
    });
});

describe.each([
    { message: 'Should be possible to insert a new Fruit into database', payload: { name: 'Pear' }, expected: 201 },
    { message: 'Should not be possible to insert a new Fruit if it already exists in database', payload: { name: 'Apple' }, expected: 409 },
])('Fruits', ({ message, payload, expected }) => {
    it(message, async () => {
        const response = await Request(App).post('/api/fruits').send(payload);
        expect(response.statusCode).toBe(expected);
    });
});

describe.each([
    { message: 'Should be possible to update an Fruit in database', query: 'Banana', payload: { newName: 'Mango' }, expected: 200 },
    { message: 'Should throw 404 error trying to update an Fruit that isn\'t in database', query: 'Grape', payload: { newName: 'Orange' }, expected: 404 }
])('Fruits', ({ message, query, payload, expected }) => {
    it(message, async () => {
        const response = await Request(App).put(`/api/fruits/${query}`).send(payload);
        expect(response.statusCode).toBe(expected);
    });
});

describe.each([
    { message: 'Should be possible to delete an Fruit from database', query: 'Mango', expected: 200 },
    { message: 'Should throw 404 error trying to delete an Fruit that isn\'t in database', query: 'orange', expected: 404 },
])('Fruits', ({ message, query, expected }) => {
    it(message, async () => {
        const response = await Request(App).delete(`/api/fruits/${query}`);
        expect(response.statusCode).toBe(expected);
    });
});
