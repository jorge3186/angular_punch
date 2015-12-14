/**
 * Created by jordan on 12/7/15.
 */

var mainControllers = angular.module('controllers', []);


///USER CONTROLLER - works with adding and retrieving user info
mainControllers.controller('UserController', UserController);
UserController.$inject = ['$scope', 'UserService', 'jwtHelper', '$location', '$localStorage', '$rootScope'];


function UserController($scope, UserService, jwtHelper, $location, $localStorage, $rootScope){

    $scope.current_id = UserService.decodedToken().id;

    $scope.user = UserService.user.get({user_id:$scope.current_id});

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
LoginController.$inject = ['$scope', '$http', '$location', '$rootScope', 'LoginService' ];

function LoginController($scope, $http, $location, $rootScope, LoginService) {

    var userLogin = {};
    userLogin.username = null;
    userLogin.password = null;

    $scope.errorMsg = null;

    $scope.auth = function () {

        userLogin.username = $scope.username;
        userLogin.password = $scope.password;

        $http.post('http://localhost:8082/timePuncher/api/login', userLogin)
            .then(function (res) {
                if (res.data.message === "Invalid Credentials"){
                    $scope.errorMsg = res.data.message;
                }
                else {
                    LoginService.saveToken(res.headers('X-AUTH-TOKEN'));
                    $rootScope.loggedInUser = userLogin.username;
                    $scope.errorMsg = null;
                    $location.url('/home');
                }
            });
    }
}
