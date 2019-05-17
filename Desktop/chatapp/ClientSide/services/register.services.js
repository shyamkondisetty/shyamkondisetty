app.service('registerService',function($location){
    this.registerSubmitClick=function(registerdata){
        console.log(registerdata);
        $location.path('/login')
    }
})