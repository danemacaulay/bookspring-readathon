'use strict';

var moment = require('moment');

/* @ngInject */
function StatsController($rootScope, $scope, bsrFirebase) {
    var user;

    function calculateReadingStats(snapshot) {
        var firstDay;
        var lastDay;
        var minutesRead = 0;
        var key = 1;
        var totalEntries = snapshot.numChildren();
        snapshot.forEach(function (entrySnapshot) {
            var entry = entrySnapshot.val();
            minutesRead += entry.minutesRead;
            if (key === 1) {
                firstDay = moment(entry.submitted);
            }
            if (key === totalEntries) {
                lastDay = moment(entry.submitted);
            }
            key++;
        });
        var duration = moment.duration(lastDay.diff(firstDay));
        var days = Math.ceil(duration.asDays()) || 1;
        var average = parseInt(minutesRead / days, 10);
        return {
            total: minutesRead,
            average: average
        };
    }

    function fetchAndSubscibeToAllUsersReadingData() {
        bsrFirebase.child('entries/all')
            .on('value', function (snapshot) {
                $scope.$evalAsync(function () {
                    var calculations = calculateReadingStats(snapshot);
                    $scope.everyoneTotal = calculations.total;
                    $scope.everyoneAvg = calculations.average;
                });

            });
    }

    function fetchAndSubscibeToUsersReadingData() {
        bsrFirebase.child('entries/users')
            .child(user.uid)
            .on('value', function (snapshot) {
                $scope.$evalAsync(function () {
                    var calculations = calculateReadingStats(snapshot);
                    $scope.yourTotal = calculations.total;
                    $scope.yourAvg = calculations.average;
                });
            });
    }

    function init(evt, authedUser) {
        user = authedUser;
        fetchAndSubscibeToUsersReadingData();
        fetchAndSubscibeToAllUsersReadingData();
    }

    $rootScope.$on('login', init);

    $scope.yourTotal = '-';
    $scope.everyoneTotal = '-';
    $scope.yourAvg = '-';
    $scope.everyoneAvg = '-';

}



module.exports = StatsController;