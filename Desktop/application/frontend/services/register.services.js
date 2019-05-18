app.service('registerService',function($location,$http){
    this.registerSubmitClick=function(registerdata){
        $http({
            url: 'http://localhost:3000/register',
            method: 'POST',
            data: registerdata
        }).then(function(response){
            console.log('myresponse :   ',response)
            //console.log(response)

        })
        .catch(function(err){
        
            console.log("error occured"); 
            //$location.path("/login")

        })


          

    }
})