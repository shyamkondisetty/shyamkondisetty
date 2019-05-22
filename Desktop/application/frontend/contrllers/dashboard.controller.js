
app.controller('dashboardCtrl',function($scope,$rootScope,dashboardService){
console.log("imn controller");
socket.on('has connected',function(onlineUsers){
  console.log(onlineUsers)
//for(let i=0;i<onlineUsers.length;i++){
  //if(onlineUsers[i]!==$rootScope.sender){
      $rootScope.records=onlineUsers
  //}

//}
//$rootScope.records=onlineUsers;
})
 $rootScope.receiver=""
   $scope.sendClicked=function(){
            let sendmessageData={
                "reciever":$rootScope.receiver,
                "sender":$rootScope.sender,
                "message":$scope.sendmessage
              }
        console.log(sendmessageData);
        dashboardService.sendClick(sendmessageData);
      }
      $scope.recieverclicked=function(receiver){
        console.log(receiver);
        $rootScope.receiver=receiver;
        dashboardService.receiverClick();
      }
      $scope.signoutClicked=function(){
        dashboardService.signoutClick();
      }
    })