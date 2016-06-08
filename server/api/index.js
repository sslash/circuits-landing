'use strict';
const express = require('express');
const emailSubscribeClient = require('./emailSubscribeClient');

const router = express.Router();
let _app;

router
    .post('/signup', signup);

function signup (req, res, next) {
    const email = req.body.email;
    emailSubscribeClient.subscribe(email)
    .then(() => {
        res.send('ok');
    })
    .catch(err => {
        res.status(500).send({message: 'Something went wrong'});
    });
}

module.exports = function (app) {
    _app = app;
    return router;
}
