/**
 * Created by jordan on 12/7/15.
 */

var app = angular.module('mainApp', [
    'ngResource',
    'ngRoute',
    'controllers',
    'angular-jwt',
    'ngStorage']);

//configure routes
app.config(['$routeProvider',
    function($routeProvider) {
        //routes
        $routeProvider.
        when('/', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        }).
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'UserController'
        }).
        otherwise({
            redirectTo: '/'
        })
    }]);
