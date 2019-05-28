
app.controller('dashboardCtrl', function ($scope, $rootScope, dashboardService,$location) {
  console.log("imn controller");
  console.log();
  console.log("my current page url location",$location.url())
  $scope.alluserrecords=JSON.parse(localStorage.getItem('alluserrecords'))
  $scope.sender = JSON.parse(localStorage.getItem('sender'));
  $scope.records = JSON.parse(localStorage.getItem('records'));
  console.log("iam in controller records", $scope.records);

  socket.on('has connected', function (onlineUsers) {
    console.log("hi iam in socket on", onlineUsers)
    localStorage.removeItem('records');
    let recorrdsinservices = []
    for (let i = 0; i < onlineUsers.length; i++) {
      if (onlineUsers[i] !== $scope.sender) {
        recorrdsinservices.push(onlineUsers[i])
      }
    }
    localStorage.setItem('records', JSON.stringify(recorrdsinservices));
    //$rootScope.records=onlineUsers;
  })


  socket.on('loggedout', function (onlineUsers) {
    console.log("hi iam in socket loggedout", onlineUsers)
    localStorage.removeItem('records');
    let recorrdsinservices = []
    for (let i = 0; i < onlineUsers.length; i++) {
      if (onlineUsers[i] !== $scope.sender) {
        recorrdsinservices.push(onlineUsers[i])
      }
    }
    localStorage.setItem('records', JSON.stringify(recorrdsinservices));
    //localStorage.clear();
    //$rootScope.records=onlineUsers;
  })
  $scope.reciever ="";
  $scope.recieverclicked = function (reciever) {
    console.log("hi", reciever);
    $scope.reciever = reciever;
    console.log($scope.reciever)
    localStorage.setItem('reciever', JSON.stringify(reciever))
    console.log("heyy gdhjswdgh");
    let getMsgData = {
      "reciever": $scope.reciever,
      "sender": $scope.sender,
    }
    console.log("heyy gdhjswdgh");
    console.log("hi am i undefined", getMsgData);
    dashboardService.receiverClick(getMsgData,$scope);
  }

  $scope.sendClicked = function () {
    $scope.reciever = JSON.parse(localStorage.getItem('reciever'));

    if ($scope.sendmessage !== undefined) {
      console.log("why receiver is undefined", $scope.reciever);
      if ($scope.reciever !==""|| $scope.reciever !== undefined) {
        let sendmessageData = {
          "reciever": $scope.reciever,
          "sender": $scope.sender,
          "message": $scope.sendmessage
        }
        
        $scope.sendmessage = "";
        console.log(sendmessageData);
        dashboardService.sendClick(sendmessageData,$scope);
      }
      else {
        console.log("please choose reciever")
      }

    }
    else {
      console.log("message should not be empty");
    }

  }

  


  $scope.signoutClicked = function () {
    dashboardService.signoutClick($scope.sender,$scope);
  }
})
