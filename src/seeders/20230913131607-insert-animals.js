'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Animals', [
            {
                Name: 'Cat',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Name: 'Dog',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Name: 'Bird',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Animals', null, {});
    }
};
