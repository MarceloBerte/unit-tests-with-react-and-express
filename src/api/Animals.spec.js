const Request = require("supertest");
const App = require('../App');

describe.each([
    { message: 'Should return 200 retrieving all Animals', query: ' ', expected: 200 },
    { message: 'Should return 200 searching for "cat"', query: 'cat', expected: 200 },
    { message: 'Should return 200 searching for "dog"', query: 'dog', expected: 200 },
    { message: 'Should return 200 searching for "bird"', query: 'bird', expected: 200 },
    { message: 'Should return 200 searching for "horse"', query: 'horse', expected: 404 }
])('Animals', ({ message, expected, query }) => {
    it(message, async () => {
        const response = await Request(App).get(`/api/animals/${query}`);
        expect(response.statusCode).toBe(expected);
    });
});

describe.each([
    { message: 'Should be possible to insert a new Animal into database', payload: { name: 'Chicken' }, expected: 201 },
    { message: 'Should not be possible to insert a new Animal if it already exists in database', payload: { name: 'Cat' }, expected: 409 },
])('Animals', ({ message, payload, expected }) => {
    it(message, async () => {
        const response = await Request(App).post('/api/animals').send(payload);
        expect(response.statusCode).toBe(expected);
    });
});

describe.each([
    { message: 'Should be possible to update an Animal in database', query: 'Dog', payload: { newName: 'Puppy' }, expected: 200 },
    { message: 'Should throw 404 error trying to update an Animal that isn\'t in database', query: 'Horse', payload: { newName: 'Pony' }, expected: 404 }
])('Animals', ({ message, query, payload, expected }) => {
    it(message, async () => {
        const response = await Request(App).put(`/api/animals/${query}`).send(payload);
        expect(response.statusCode).toBe(expected);
    });
});

describe.each([
    { message: 'Should be possible to delete an Animal from database', query: 'Puppy', expected: 200 },
    { message: 'Should throw 404 error trying to delete an Animal that isn\'t in database', query: 'Horse', expected: 404 },
])('Animals', ({ message, query, expected }) => {
    it(message, async () => {
        const response = await Request(App).delete(`/api/animals/${query}`);
        expect(response.statusCode).toBe(expected);
    });
});
