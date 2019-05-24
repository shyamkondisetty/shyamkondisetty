
app.controller('dashboardCtrl', function ($scope, $rootScope, dashboardService) {
  console.log("imn controller");
  socket.on('has connected', function (onlineUsers) {
    console.log(onlineUsers)
    /*for (let i = 0; i < onlineUsers.length; i++) {
      if (onlineUsers[i] !== $rootScope.sender) {
        $rootScope.records.push(onlineUsers[i])
      }
    }*/
    $rootScope.records = onlineUsers;
  })
  $rootScope.receiver = ""

  $scope.recieverclicked = function (receiver) {
    console.log("hi", receiver);
    $rootScope.receiver = receiver;
    console.log($rootScope.receiver)
    console.log("heyy gdhjswdgh");
    let getMsgData = {
      "reciever": $rootScope.receiver,
      "sender": $rootScope.sender,
    }
    console.log("heyy gdhjswdgh");
    console.log("hi am i undefined", getMsgData);
    dashboardService.receiverClick(getMsgData);
  }

  $scope.sendClicked = function () {
    if ($scope.sendmessage !== undefined) {
      if($rootScope.receiver!==""){
        let sendmessageData = {
          "reciever": $rootScope.receiver,
          "sender": $rootScope.sender,
          "message": $scope.sendmessage
        }
        $scope.sendmessage = "";
        console.log(sendmessageData);
        dashboardService.sendClick(sendmessageData);
      }
      else{
        console.log("please choose reciever")
      }
  
    }
    else {
        console.log("message should not be empty");
      }
    
  }
  $scope.signoutClicked = function () {
    dashboardService.signoutClick();
  }
})