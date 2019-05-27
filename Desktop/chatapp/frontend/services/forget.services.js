app.service('forgetService',function($location){
    this.sentMailClick=function(forgetdata){
       /* console.log(forgetdata);
        $location.path('/login')*/
        $http({
            url: 'http://localhost:3000/forgetpassword',
            method: 'POST',
            data: forgetdata
        }).then(function(response){
            console.log("mail sent  successfully");
            console.log(response)
            $location.path("/login");
        })
        .catch(function(err){
            console.log(err); 
            console.log("mail not sent");
            $location.path("/login");
        })
    }  
})