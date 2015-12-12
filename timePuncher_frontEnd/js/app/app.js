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
<<<<<<< HEAD
=======
        when('/', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        }).
>>>>>>> 75a1b22690be6d109327d600841aaad923be1031
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'UserController'
        }).
<<<<<<< HEAD
        when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController',
        }).
        otherwise({
            redirectTo: '/home'
        })
    }]);

app.run(function($rootScope, $location){
    $rootScope.$on('$routeChangeStart', function(event, next, current){
        if ($rootScope.loggedInUser == null) {
            if (next.templateUrl === "partials/login.html"){
            }
            else {
                $location.path("/login");
            }
        }


    })
});
=======
        otherwise({
            redirectTo: '/'
        })
    }]);
>>>>>>> 75a1b22690be6d109327d600841aaad923be1031
