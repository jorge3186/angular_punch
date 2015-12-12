/**
 * Created by jordan on 12/7/15.
 */

var mainControllers = angular.module('controllers', []);


///USER CONTROLLER - works with adding and retireving user info
mainControllers.controller('UserController', UserController);
UserController.$inject = ['$scope', 'UserService', 'jwtHelper', '$location', '$localStorage', '$rootScope'];


function UserController($scope, UserService, jwtHelper, $location, $localStorage, $rootScope){

    //grab all users
    $scope.listAll = function(){
        UserService.query(function(data){
            $scope.users = data;
        })
    };

    //persist new user
    $scope.addUser = function(){
        //console.log($scope.user);
        UserService.save($scope.user);
        $scope.user = null;
        $scope.listAll();

    };

    //delete user
    $scope.deleteUser = function(u){
        //console.log(u);
        UserService.delete({user_id: u.user_id});
        $scope.listAll();
    };

    //retrieve token
    function getToken(){
        return jwtHelper.decodeToken($localStorage.jwtToken);
    }

    $scope.message = "Hello " + $rootScope.loggedInUser;

    //clear token and return to login screen
    $scope.logout = function(){
        delete $localStorage.jwtToken;
        delete $rootScope.loggedInUser;
        $location.path('/login');
    }

}


///LOGIN CONTROLLER - deals with login and credentials
mainControllers.controller('LoginController', LoginController);
LoginController.$inject = ['$scope', '$http', '$localStorage', '$location', 'jwtHelper', 'LoginService', '$rootScope' ];

function LoginController($scope, $http, $localStorage,$location, jwtHelper, LoginService, $rootScope){

    login = {};
    login.username = null;
    login.password = null;

    $scope.errorMsg = null;

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
                    $scope.errorMsg = null;
                    $rootScope.loggedInUser = login.username;
                    $location.path('/home');
                }
                else {
                    $scope.errorMsg = data.message;
                }

            })
    };

}
