const App = require('./src/App');

const PORT = 8080;
const HOST = '0.0.0.0';

App.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
