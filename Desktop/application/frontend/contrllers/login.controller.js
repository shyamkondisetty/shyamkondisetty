app.controller('loginCtrl',function($scope,loginService){
    $scope.loginsubmit=function(){
            let loginPageData={
                  "useremail": $scope.useremail,
                  "password": $scope.password
              }

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