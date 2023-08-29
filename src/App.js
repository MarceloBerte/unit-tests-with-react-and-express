const Express = require('express');
const App = Express();

const BodyParser = require('body-parser');

const Animals = require('./api/Animals');
const Fruits = require('./api/Fruits');

App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());

App.use(Express.static('src/public'));

App.get('/', (req, res) => { res.send(); });

App.use('/api', Animals);
App.use('/api', Fruits);

module.exports = App;
