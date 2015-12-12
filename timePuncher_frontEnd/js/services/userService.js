/**
 * Created by jordan on 12/7/15.
 */

app.factory('UserService', function($http, $localStorage){
    return $http({
        method: 'OPTIONS',
        url: 'http://localhost:8082/timePuncher/api/users',
        headers: {
            'X-AUTH-TOKEN': $localStorage.jwtToken
        }
    });
});

app.factory('LoginService', function($resource){
   return $resource('http://localhost:8082/timePuncher/api/login');
});
