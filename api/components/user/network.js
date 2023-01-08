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

router.get('/:id', (req, res) =>{
    controller.get(req.params.id)
        .then(user => {
            response.success(req, res, user, 200);
        }) 
        .catch(e => {
            response.error(req, res, e.message, 500)
        })
})

router.patch('/', (req, res) =>{
    controller.upsert(req.body)
        .then(data => {
            response.success(req, res, data, 201);
        }) 
        .catch(e => {
            response.error(req, res, e.message, 500)
        })
})

router.delete('/:id', (req, res) =>{
    controller.remove(req.params.id)
        .then(data => {
            response.success(req, res, data, 200);
        }) 
        .catch(e => {
            response.error(req, res, e.message, 500)
        })
})

module.exports = router;