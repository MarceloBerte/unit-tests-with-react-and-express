'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Fruits', [
            {
                Name: 'Apple',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Name: 'Banana',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Name: 'Strawberry',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Fruits', null, {});
    }
};
