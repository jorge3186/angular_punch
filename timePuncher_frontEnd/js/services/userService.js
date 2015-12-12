/**
 * Created by jordan on 12/7/15.
 */

<<<<<<< HEAD
app.factory('UserService', function($http, $localStorage){
    return $http({
        method: 'OPTIONS',
        url: 'http://localhost:8082/timePuncher/api/users',
        headers: {
            'X-AUTH-TOKEN': $localStorage.jwtToken
        }
    });
=======
app.factory('UserService', function($resource, $localStorage){
    return $resource('http://localhost:8082/timePuncher/api/users/:user_id', {user_id : '@user_id'})
>>>>>>> 75a1b22690be6d109327d600841aaad923be1031
});

app.factory('LoginService', function($resource){
   return $resource('http://localhost:8082/timePuncher/api/login');
});
