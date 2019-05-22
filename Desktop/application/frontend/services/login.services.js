app.service('loginService',function($location,$http,$rootScope){
    this.loginClick=function(logindata){
        
        console.log(logindata)
        $http({
            url: 'http://localhost:3000/login',
            method: 'POST',
            data: logindata
        }).then(function(response){
            console.log('myresponse :   ',response)
            $rootScope.sender=logindata.useremail;
            //$rootScope.logggedin=true
            $rootScope.records=[];
            socket.emit('has connected',$rootScope.sender)
            socket.on('has connected',function(onlineUsers){
            console.log(onlineUsers)
          for(let i=0;i<onlineUsers.length;i++){
            if(onlineUsers[i]!==$rootScope.sender){
                $rootScope.records.push(onlineUsers[i])
            }
        
        }
        //$rootScope.records=onlineUsers;
        })
            $location.path("/dash");

        })
        .catch(function(err){
            console.log("error occured",err); 
        })
    }
    this.signupClick=function(){
        $location.path('/register')
    }
    this.forgetClick=function(){
        $location.path('/forgetpassword')
    }
})

