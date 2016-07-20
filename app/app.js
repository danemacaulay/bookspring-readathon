'use strict';

require('./app.css');
// require('./mock');  // generates mock data

module.exports = require('angular').module('bookspring-readathon', [
    'ui.bootstrap',
    'firebase',
    require('./nav').name,
    require('./footer').name,
    require('./login-modal').name,
    require('./reading-badges').name,
    require('./reading-entry').name,
    require('./reading-map').name,
    require('./reading-list').name,
    require('./stats').name,
    require('./firebase').name,
    require('./translations').name
])
.controller('appController', require('./app-controller'))
.factory('appFactory', require('./app-factory'));

