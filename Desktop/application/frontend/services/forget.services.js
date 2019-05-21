app.service('forgetService',function($location){
    this.sentMailClick=function(forgetdata){
        console.log(forgetdata);
        $location.path('/login')
    }  
})