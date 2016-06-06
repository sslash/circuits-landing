'use strict';
const req = require('good-guy-http')();
const Promise = require('bluebird');
const url = 'https://www.getrevue.co/api/v2/subscribers';
const TOKEN = 'OemwttTJKB_c4IcTpgnl8wrrxOj0Hirn';

const headers = {
    Authorization: 'Token token="' + TOKEN + '"'
};

function subscribe (email) {
    const body = {
        email: email
    };

    // TODO: make sure this is correct
    // docs are in the email service intercom chat
    return req({
        url: url,
        method: 'post',
        json: true,
        headers: headers,
        body: body
    }).then((data) => {
        return data;
    })
    .catch((err) => {
        console.error('Failed to subscribe to email', err);
        return Promise.reject(err);
    })
}

module.exports = {
    subscribe: subscribe
};
