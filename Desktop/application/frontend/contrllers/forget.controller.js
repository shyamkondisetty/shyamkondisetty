app.controller('forgetCtrl',function($scope,forgetService){
    $scope.sendmailclicked=function(){
        let forgetPageData={
            "useremail": $scope.useremail
        }
        console.log(forgetPageData);
        forgetService.sentMailClick(forgetPageData);
    }
  })