const Request = require("supertest");
const App = require('../App');

describe.each([
    { query: '', expected: 200 },
    { query: 'cat', expected: 200 },
    { query: 'dog', expected: 200 },
    { query: 'bird', expected: 200 },
    { query: 'horse', expected: 404 }
])('Animals', ({ query, expected }) => {
    it(`Should return ${expected} searching for "${query}"`, async () => {
        const response = await Request(App).get(`/api/animals/${query}`);
        expect(response.statusCode).toBe(expected);
    });
});

describe.each([
    { message: 'Should be possible to insert a new Animal into database', payload: { name: 'Chicken' }, expected: 201 },
    { message: 'Should not be possible to insert a new Animal if it already exists in database', payload: { name: 'Cat' }, expected: 409 }
])('Animals', ({ message, payload, expected }) => {
    it(message, async () => {
        const response = await Request(App).post('/api/animals').send(payload);
        expect(response.statusCode).toBe(expected);
    });
});
