/** @type {import('jest').Config} */

const config = {
    verbose: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: [
      "/node_modules/"
    ]
};

module.exports = config;
