var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "./templates/login.html",
    controller : "loginCtrl"
  })
  .when("/login", {
    templateUrl : "./templates/login.html",
    controller : "loginCtrl"
  })
  .when("/register", {
    templateUrl : "./templates/register.html",
    controller : "registerCtrl"
  })
  .when("/forgetpassword", {
    templateUrl : "./templates/forgetpassword.html",
    controller : "forgetCtrl" 
  })
  .when("/reset", {
    templateUrl : "./templates/reset.html",
    controller : "resetCtrl" 
  })
  .otherwise("/",{
    redirectTo: "/"
  })
});
