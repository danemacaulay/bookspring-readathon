'use strict';
require('./footer.css');
module.exports = require('angular').module('footer', [])
    .component('footer', {
        template: require('./footer.html'),
        controller: require('./footer-controller')
    });
