app.service('dashboardService',function($location,$http){
    console.log("imn services"); 
    //$rootScope.usermessages=[];
    this.receiverClick=function(getmessagedata,$scope){
        // $location.path('/dashboard')
        console.log(getmessagedata);
        $http({
            url: 'http://localhost:3000/getMsg',
            method:'POST',
            data: getmessagedata
        }).then(function(response){
            console.log('myresponse : ',response);
            console.log('msg',response.data.data);
            localStorage.setItem('usermessages', JSON.stringify(response.data.data))
            $scope.usermessages=JSON.parse(localStorage.getItem('usermessages'));
            console.log("my messages are",$scope.usermessages);
        })
        .catch(function(err){
            console.log("my err",err);
            console.log("error occured"); 
        })
    }
    this.sendClick=function(sendmessagedata,$scope){
        //console.log(logindata)
        $http({
            url: 'http://localhost:3000/dashboard',
            method:'POST',
            data: sendmessagedata
        }).then(function(response){
            console.log('myresponse : ',response);
            //$location.path('/dashboard')
            socket.emit('messagesent', sendmessagedata)
            socket.on('messagesent', function (messagedata) {
                console.log("iam in send message emit ",messagedata);
                console.log("hi iam in socket on", messagedata)
                $scope.usermessages.push(messagedata)
                //$rootScope.records=onlineUsers;
            })
            localStorage.removeItem('usermessages')
            localStorage.setItem('usermessages', JSON.stringify($scope.usermessages))
            $scope.usermessages=JSON.parse(localStorage.getItem('usermessages'));
        })
        .catch(function(err){
            console.log("error occured"); 
            console.log(err);
        })
    }
    
    this.signoutClick=function(sender){
        socket.emit('loggedout', sender)
       
        $location.path('/login')
    }
})