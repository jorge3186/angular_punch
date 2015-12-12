/**
 * Created by jordan on 12/7/15.
 */

var mainControllers = angular.module('controllers', []);


///USER CONTROLLER - works with adding and retireving user info
mainControllers.controller('UserController', UserController);
<<<<<<< HEAD
UserController.$inject = ['$scope', 'UserService', 'jwtHelper', '$location', '$localStorage', '$rootScope'];


function UserController($scope, UserService, jwtHelper, $location, $localStorage, $rootScope){

=======
UserController.$inject = ['$scope', 'UserService', 'jwtHelper', '$location', '$localStorage'];


function UserController($scope, UserService, jwtHelper, $location, $localStorage){
>>>>>>> 75a1b22690be6d109327d600841aaad923be1031
    //grab all users
    $scope.listAll = function(){
        UserService.query(function(data){
            $scope.users = data;
        })
    };

<<<<<<< HEAD
    //persist new user
=======
>>>>>>> 75a1b22690be6d109327d600841aaad923be1031
    $scope.addUser = function(){
        //console.log($scope.user);
        UserService.save($scope.user);
        $scope.user = null;
        $scope.listAll();

    };

<<<<<<< HEAD
    //delete user
=======
>>>>>>> 75a1b22690be6d109327d600841aaad923be1031
    $scope.deleteUser = function(u){
        //console.log(u);
        UserService.delete({user_id: u.user_id});
        $scope.listAll();
    };

<<<<<<< HEAD
    //retrieve token
=======
>>>>>>> 75a1b22690be6d109327d600841aaad923be1031
    function getToken(){
        return jwtHelper.decodeToken($localStorage.jwtToken);
    }

<<<<<<< HEAD
    $scope.message = "Hello " + $rootScope.loggedInUser;

    //clear token and return to login screen
    $scope.logout = function(){
        delete $localStorage.jwtToken;
        delete $rootScope.loggedInUser;
=======
    $scope.message = "Hello " + getToken().sub;

    $scope.logout = function(){
        delete $localStorage.jwtToken;
>>>>>>> 75a1b22690be6d109327d600841aaad923be1031
        $location.path('/login');
    }

}


///LOGIN CONTROLLER - deals with login and credentials
mainControllers.controller('LoginController', LoginController);
<<<<<<< HEAD
LoginController.$inject = ['$scope', '$http', '$localStorage', '$location', 'jwtHelper', 'LoginService', '$rootScope' ];

function LoginController($scope, $http, $localStorage,$location, jwtHelper, LoginService, $rootScope){
=======
LoginController.$inject = ['$scope', '$http', '$localStorage', '$location', 'jwtHelper', 'LoginService' ];

function LoginController($scope, $http, $localStorage,$location, jwtHelper, LoginService){
>>>>>>> 75a1b22690be6d109327d600841aaad923be1031

    login = {};
    login.username = null;
    login.password = null;

<<<<<<< HEAD
    $scope.errorMsg = null;

=======
>>>>>>> 75a1b22690be6d109327d600841aaad923be1031
    function saveToken(token){
        $localStorage.jwtToken = token;
    }
    function getToken() {
        return $localStorage.jwtToken;
    }

    $scope.auth = function(){

        login.username = $scope.username;
        login.password = $scope.password;

        $http.post( 'http://localhost:8082/timePuncher/api/login', login)
            .success(function(data, status, headers, config){
                if (data.message === 'Successful Login'){
                    saveToken(headers('X-AUTH-TOKEN'));
<<<<<<< HEAD
                    $scope.errorMsg = null;
                    $rootScope.loggedInUser = login.username;
                    $location.path('/home');
                }
                else {
                    $scope.errorMsg = data.message;
                }
=======
                    $location.path('/home');
                }
>>>>>>> 75a1b22690be6d109327d600841aaad923be1031

            })
    };

<<<<<<< HEAD
=======
    $scope.check = function(){
        console.log($localStorage.jwtToken)
    };
    $scope.delete = function(){
        delete $localStorage.jwtToken
    }

>>>>>>> 75a1b22690be6d109327d600841aaad923be1031
}
