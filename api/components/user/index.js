const controller = require('./controller');
//const store = require('../../../store/mysql');
const store = require('../../../store/remote-mysql');

// Inyección de una base de datos al controlador
module.exports = controller(store);