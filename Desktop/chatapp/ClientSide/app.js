var app=angular.module(chatApp,['ui.router'])
app.config(function($routeProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
    $routeProvider
    .state('login', {
        url: '/login',
        templateUrl: 'dashboard.html',
        controller :'loginctrl'
    })
    .state('register', {
        url: '/register',
        templateUrl: 'register.html',
        controller :'registerctrl'
    })
    .state('forget', {
        url: '/forgetpassword',
        templateUrl: 'forgetpassword.html',
        controller :'forgetctrl'
    })
    .state('forget.verify', {
        url: '/verify',
        templateUrl: 'verify.html',
        controller :'verifyctrl'
    })
    .state('forget.change', {
        url: '/change',
        templateUrl: 'changepassword.html',
        controller :'changectrl'
    })
})