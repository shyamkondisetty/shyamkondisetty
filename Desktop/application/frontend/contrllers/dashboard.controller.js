
app.controller('dashboardCtrl', function ($scope, $rootScope, dashboardService) {
  console.log("imn controller");
  socket.on('has connected', function (onlineUsers) {
    console.log(onlineUsers)
    for (let i = 0; i < onlineUsers.length; i++) {
      if (onlineUsers[i] !== $rootScope.sender) {
        $rootScope.records = onlineUsers[i]
      }
    }
    //$rootScope.records=onlineUsers;
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
    let sendmessageData = {
      "reciever": $rootScope.receiver,
      "sender": $rootScope.sender,
      "message": $scope.sendmessage
    }
    console.log(sendmessageData);
    dashboardService.sendClick(sendmessageData);
  }
  $scope.signoutClicked = function () {
    dashboardService.signoutClick();
  }
})