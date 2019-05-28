app.controller('loginCtrl',function($scope,loginService){

    localStorage.clear();
    $scope.loginsubmit=function(){
            let loginPageData={
                  "useremail": $scope.useremail,
                  "password": $scope.password
              }
              
              //$scope.errmessage="invalid user"
        console.log(loginPageData);
        loginService.loginClick(loginPageData);
      }
      $scope.registerclicked=function(){
           loginService.signupClick();
      }
      $scope.forgetclicked=function(){
          loginService.forgetClick();
        
      }
    })