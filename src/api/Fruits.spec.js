const Request = require("supertest");
const App = require('../App');

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
