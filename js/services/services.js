/**
 * Created by jordan on 12/7/15.
 */

/// USER SERVICE - temporary homepage /////////////////////////////////
app.factory('UserService', function($resource, $localStorage, jwtHelper) {

    var service = {};

    service.user = $resource('http://localhost:8082/timePuncher/api/users/:user_id', {user_id: '@user_id'},
        {get: {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN' : $localStorage.jwtToken
            }
        }
        });

    service.getToken = function(){
        return $localStorage.jwtToken;
    };

    service.decodedToken = function(){
        return jwtHelper.decodeToken($localStorage.jwtToken);
    }

    return service;
});




//LOGIN SERVICE ////////////////////////////////
app.factory('LoginService', function($http, $localStorage){

    var service = {};

    service.saveToken = function(token){
        $localStorage.jwtToken = token;
    };

    service.getToken = function(){
        return $localStorage.jwtToken;
    };

    return service;
});
