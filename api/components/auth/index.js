const controller = require('./controller');
const store = require('../../../store/dummy');

// Inyección de una base de datos al controlador
module.exports = controller(store);