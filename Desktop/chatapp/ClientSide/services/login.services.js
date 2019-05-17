app.service('loginService',function($location){
    this.loginClick=function(logindata){
        console.log(logindata)
        $location.path('/login')
    }
    this.signupClick=function(){
        $location.path('/register')
    }
    this.forgetClick=function(){
        $location.path('/forgetpassword')
    }
})

