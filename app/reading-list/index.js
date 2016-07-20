'use strict';
require('./reading-list.css');
module.exports = require('angular').module('reading-list', [])
    .component('readingList', {
        template: require('./reading-list.html'),
        controller: require('./reading-list-controller')
    });
