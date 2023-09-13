const App = require('./src/App');

const sequelize = require('./src/config/db');

const PORT = 8080;
const HOST = '0.0.0.0';

const checkDBConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkDBConnection();

App.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});
