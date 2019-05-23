app.controller('resetCtrl',function($scope,resetService){
    $scope.changepasswordclicked=function(){
      let resetPageData={
        "password" : $scope.password
      }
    resetService.changePasswordClick(resetPageData);
    }
  })