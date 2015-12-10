/**
 * Created by jordan on 12/7/15.
 */

app.factory('UserService', function($resource, $localStorage){
    return $resource('http://localhost:8082/timePuncher/api/users/:user_id', {user_id : '@user_id'})
});

app.factory('LoginService', function($resource){
   return $resource('http://localhost:8082/timePuncher/api/login');
});
