app.service('dashboardService',function($location){
    console.log("imn services");
    /*this.sendClicked=function(sendmessagedata){
        console.log(logindata)
        $http({
            url: 'http://localhost:3000/dashboard',
            method: 'POST',
            data: sendmessagedata
        }).then(function(response){
            console.log('myresponse : ',response);
            $location.path('/dashboard')
        })
        .catch(function(err){
            console.log("error occured"); 
        })
    }*/
    this.receiverClick=function(){
       // $location.path('/dashboard')
    }
    this.signoutClick=function(){
        $location.path('/login')
    }
})