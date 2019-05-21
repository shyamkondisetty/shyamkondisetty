app.service('loginService',function($location){
    this.loginClick=function(logindata){
        console.log(logindata)
        $http({
            url: 'http://localhost:3000/login',
            method: 'POST',
            data: logindata
        }).then(function(response){
            console.log('myresponse :   ',response)
            $rootScope.useremail=logindata.useremail;
            $rootScope.loggegIn=true
            $location.path("/dashbaord");
        })
        .catch(function(err){
            console.log("error occured"); 
        })
    }
    this.signupClick=function(){
        $location.path('/register')
    }
    this.forgetClick=function(){
        $location.path('/forgetpassword')
    }
})

