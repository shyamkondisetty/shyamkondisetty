app.controller('dashboardCtrl',function($scope,$rootScope,dashboardService){
console.log("imn controller");
  $scope.records = [
    "shyamkondisetty@gmail.com",
    "shyamprasad.733@gmail.com",
    "shyam123@gmail.com",

  ]
  $rootScope.receiver=""
   /* $scope.sendClicked=function(){
            let sendmessageData={
                "reciever":$rootScope.reciever,
                "sender":$rootScope.sender,
                "message":$scope.sendmessage
              }
        console.log(sendmessageData);
        dashboardService.sendClick(sendmessageData);
      }*/
      $scope.recieverclicked=function(receiver){
        console.log(receiver);
        $rootScope.receiver=receiver;
        dashboardService.receiverClick();
      }
      $scope.signoutClicked=function(){
        dashboardService.signoutClick();
      }
    })