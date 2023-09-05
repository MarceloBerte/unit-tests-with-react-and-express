const Request = require("supertest");
const App = require('../App');

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
