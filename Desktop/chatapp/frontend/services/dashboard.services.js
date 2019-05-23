app.service('dashboardService',function($location,$rootScope,$http){
    console.log("imn services");
    this.receiverClick=function(getmessagedata){
        // $location.path('/dashboard')
        console.log(getmessagedata);
        $http({
            url: 'http://localhost:3000/getMsg',
            method:'POST',
            data: getmessagedata
        }).then(function(response){
            console.log('myresponse : ',response);
            console.log('msg',response.data.data[0]);

        })
        .catch(function(err){
            console.log("error occured"); 
        })
    }
    this.sendClick=function(sendmessagedata){
        //console.log(logindata)
        $http({
            url: 'http://localhost:3000/dashboard',
            method:'POST',
            data: sendmessagedata
        }).then(function(response){
            console.log('myresponse : ',response);
            //$location.path('/dashboard')
        })
        .catch(function(err){
            console.log("error occured"); 
        })
    }
    
    this.signoutClick=function(){
        $location.path('/login')
    }
})