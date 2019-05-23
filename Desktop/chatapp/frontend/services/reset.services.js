app.service('resetService',function($location){
    this.changePasswordClick=function(resetdata){
        console.log(resetdata)
        $location.path('/login')
    }  
})