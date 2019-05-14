
var app=angular.module("chatApp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'login.html'
    })
    .when('/signup',{
        templateUrl:'register.html'
    })

    .when('/dashboard',{
        resolve:{
            "check":function($location){
                if($rootsScope.loggedin){
                    $location.path('/');
                    
                }
            }
        },
        templateUrl:'dashboard.html'
       
    })
    .otherwise({
        redirectTo:'/'
    });
})

app.controller('loginCtrl',function($scope,$location,$rootScope){
    $scope.submitLogin=function(){
        if("verifiedsuccessfully"){
            $rootScope.loggedin=true;
            $location.path('/dashboard');
        }
        else{
            alert('wrong input')
        }
    }

    $scope.register=function(){
        $location.path('/signup');
    }
})
app.controller('registerCtrl',function($scope,$location,$rootScope){
    $scope.submitRegister=function(){
        if("verifiedsuccessfully"){
            $rootScope.loggedin=true;
            $location.path('/dashboard');
        }
        else{
            alert('wrong input')
        }
    }
})