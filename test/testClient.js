const emailSubscribeClient = require('../server/api/emailSubscribeClient');

emailSubscribeClient.subscribe('slashssnakepit4@hotmail.com')
.then((res) => {
    console.log('yolo', res);
})
.catch((err) => {
    console.log('error', err);
})
