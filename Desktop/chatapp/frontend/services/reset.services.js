app.service('resetService',function($location,$http){
    this.changePasswordClick=function(resetdata){
        console.log(resetdata)
        $http({
            url: 'http://localhost:3000/reset',
            method: 'POST',
            data: resetdata
        }).then(function(response){
            console.log("password successfully");
            console.log(response)
            $location.path("/login");
        })
        .catch(function(err){
            console.log(err); 
            console.log("reset unsuccessful");
            $location.path("/login");
        })

    }  
})