const express = require('express');

const controller = require('./index');
const response = require('../../../network/response');

const router = express.Router();

router.get('/', (req, res) =>{
    controller.list()
        .then(users => {
            response.success(req, res, users, 200);
        }) 
        .catch(e => {
            response.error(req, res, e.message, 500)
        })
})

router.post('/login', (req, res) =>{
    controller.login(req.body.username, req.body.password)
        .then(data => {
            response.success(req, res, data, 200);
        }) 
        .catch(e => {
            response.error(req, res, e.message, 400)
        })
})

module.exports = router;