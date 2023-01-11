const express = require('express');

const Store = require('../store/mysql');
const response = require('../network/response');

const router = express.Router();

router.get('/:tabla', list);
router.get('/:tabla/:id', get);
router.post('/:tabla', insert);
router.put('/:tabla/', upsert);

async function list(req, res, next){
    const list = await Store.list(req.params.tabla);
    response.success(req, res, list, 200);
}

async function get(req, res, next){
    const get = await Store.get(req.params.tabla, req.params.id);
    response.success(req, res, get, 200);
}

async function insert(req, res, next){
    const get = await Store.upsert(req.params.tabla, req.body);
    response.success(req, res, get, 200);
}

async function upsert(req, res, next){
    const get = await Store.upsert(req.params.tabla, req.body);
    response.success(req, res, get, 200);
}

module.exports = router;