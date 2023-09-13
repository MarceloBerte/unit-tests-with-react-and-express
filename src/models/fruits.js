const Sequelize = require('sequelize');
const db = require('../config/db');

const Fruits = db.define(
    'Fruits',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = Fruits;
