const Sequelize = require('sequelize');

const HOST = process.env.POSTGRES_HOST;
const USER = process.env.POSTGRES_USER;
const PASSWORD = process.env.POSTGRES_PASSWORD;
const DATABASE = process.env.POSTGRES_DB;
const DIALECT = 'postgres';

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    define: {
        freezeTableName: true
    }
});

module.exports = sequelize;
