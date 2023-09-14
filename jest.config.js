/** @type {import('jest').Config} */

const config = {
    verbose: true,
    testEnvironment: "node",
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ]
};

module.exports = config;
