/*global angular */

/**
 * The main AppMVC app module
 *
 * @type {angular.Module}
 */

angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {templateUrl: '/partials/main/main', controller: 'mainCtrl'})
        .when('/sales', {
            templateUrl: '/partials/sales/sales-list',
            controller: 'salesCtrl'
        });


});
angular.module('app').controller('mainCtrl', function ($scope) {
    $scope.myVar = "Angular";
});
