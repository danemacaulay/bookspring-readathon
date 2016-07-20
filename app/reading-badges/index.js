'use strict';
require('./badges.css');
module.exports = require('angular').module('reading-badges', [])
    .component('readingBadges', {
        template: require('./reading-badges.html'),
        controller: require('./reading-badges-controller')
    });
