var app=angular.module("chatApp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('!/',{
        templateUrl:'login.html',
        controller :'loginCtrl'

    })
    .when('/dashboard',{
        
        templateUrl:'login.html'
        
    })
    .otherwise({
        redirectTo:'/'
    });
    
})