const Request = require("supertest");
const App = require('../App');

describe.each([
    { query: '', expected: 200 },
    { query: 'apple', expected: 200 },
    { query: 'banana', expected: 200 },
    { query: 'strawberry', expected: 200 },
    { query: 'grape', expected: 404 },
])('Fruits', ({ query, expected }) => {
    it(`Should return ${expected} searching for "${query}"`, async () => {
        const response = await Request(App).get(`/api/fruits/${query}`);
        expect(response.statusCode).toBe(expected);
    });
});

describe.each([
    { message: 'Should be possible to insert a new Fruit into database', payload: { name: 'Pear' }, expected: 201 },
    { message: 'Should not be possible to insert a new Fruit if it already exists in database', payload: { name: 'Apple' }, expected: 409 }
])('Fruits', ({ message, payload, expected }) => {
    it(message, async () => {
        const response = await Request(App).post('/api/fruits').send(payload);
        expect(response.statusCode).toBe(expected);
    });
});

describe.each([
    { message: 'Should be possible to delete a Fruit from database', query: 'Banana', expected: 200 },
    { message: 'Should throw 404 error trying to delete a Fruit that isn\'t in database', query: 'Orange', expected: 404 },
])('Fruits', ({ message, query, expected }) => {
    it(message, async () => {
        const response = await Request(App).delete(`/api/fruits/${query}`);
        expect(response.statusCode).toBe(expected);
    });
});