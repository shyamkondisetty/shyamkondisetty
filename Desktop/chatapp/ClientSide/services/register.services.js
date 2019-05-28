app.service('registerService',function($location,$http){
    this.registerSubmitClick=function(registerdata){
        $http({
            url: 'http://localhost:3000/register',
            method: 'POST',
            data: registerdata
        }).then(function(response){
            console.log("registration successful");
            console.log(response)
            $location.path("/login");
        })
        .catch(function(err){
            console.log(err); 
            console.log("registration unsuccessful");
            $location.path("/login");
        })

    }
})