'use strict';
require('./stats.css');
module.exports = require('angular').module('bsr-stats', [])
    .component('stats', {
        template: require('./stats.html'),
        controller: require('./stats-controller')
    });
