'use strict';

/* @ngInject */
function ReadingListController($scope) {
    $scope.books = [
        {
            'title': 'book 1',
            'amount': 35
        },
        {
            'title': 'book 2',
            'amount': 45
        },
        {
            'title': 'book 3',
            'amount': 25
        },
        {
            'title': 'book 4',
            'amount': 15
        },
        {
            'title': 'book 5',
            'amount': 75
        }
    ]
}



module.exports = ReadingListController;