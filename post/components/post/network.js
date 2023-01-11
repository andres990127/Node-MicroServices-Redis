const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/', (req, res) =>{
    Controller.list()
        .then(users => {
            response.success(req, res, users, 200);
        }) 
        .catch(e => {
            response.error(req, res, e.message, 500)
        })
})

module.exports = router;