const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config.js');
const router = require('./network');

const app = express();
app.use(bodyParser.json());
app.use('/', router);

app.listen(config.cacheService.port, () => {
    console.log('Servicio de caché escuchando en el puerto ', config.cacheService.port);
});