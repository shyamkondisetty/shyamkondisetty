app.controller('resetCtrl',function($scope,resetService,$location){

  if($location.url().indexOf('token') !== -1){    
    $scope.token= $location.url().split('=')[1];
    //$scope.loc = $scope.loc.split("#")[0]        
  }
    $scope.changepasswordclicked=function(){
      let resetPageData={
        "token" :$scope.token,
        "password" : $scope.password
      }
      console.log(resetPageData);
    resetService.changePasswordClick(resetPageData);
    }
  })