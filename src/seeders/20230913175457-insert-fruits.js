'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */

        const creationDate = new Date();

        await queryInterface.bulkInsert('Fruits', [
            {
                name: 'Apple',
                createdAt: creationDate,
                updatedAt: creationDate
            },
            {
                name: 'Banana',
                createdAt: creationDate,
                updatedAt: creationDate
            },
            {
                name: 'Strawberry',
                createdAt: creationDate,
                updatedAt: creationDate
            }
        ])
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await queryInterface.bulkDelete('Fruits, null, {}')
    }
};
