'use strict';

/* @ngInject */
function ReadingListController($rootScope, $scope, bsrFirebase) {

    function fetchAndSubscibeToUsersReadingData(evt, startDate, user) {
        bsrFirebase.child('entries/users')
            .child(user.uid)
            .orderByChild('submitted')
            .startAt(startDate)
            .on('value', function (snapshot) {
                $scope.$evalAsync(function () {
                    $scope.books = snapshot.val();
                });
            });
    }

    $scope.books = {};

    $scope.hasEntries = function () {
        return Object.keys($scope.books).length;
    };

    $rootScope.$on('numberOfDays', fetchAndSubscibeToUsersReadingData);

}



module.exports = ReadingListController;