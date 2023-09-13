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

        await queryInterface.bulkInsert('Animals', [
            {
                name: 'Cat',
                createdAt: creationDate,
                updatedAt: creationDate
            },
            {
                name: 'Dog',
                createdAt: creationDate,
                updatedAt: creationDate
            },
            {
                name: 'Bird',
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

        await queryInterface.bulkDelete('Animals, null, {}')
    }
};
