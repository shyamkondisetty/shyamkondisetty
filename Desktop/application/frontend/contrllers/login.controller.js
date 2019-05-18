app.controller('loginCtrl',function($scope,loginService){
    $scope.loginsubmit=function(){
            let loginPageData={
                  "useremail": $scope.useremail,
                  "password": $scope.password
              }
          // $http.get('http://localhost:3000/login').sucess(function(data){
         //if(data.status==true){
          
        // }
         //else{
           //<p>error occured</p>
         //}
        console.log(loginPageData);
        loginService.loginClick(loginPageData);
      }//)
      $scope.registerclicked=function(){
         //$http.get('http://localhost:3000/login').sucess(function(data){
          //if(data.status==true){
            
           //}
           loginService.signupClick();
      //  })
      }
      $scope.forgetclicked=function(){
          loginService.forgetClick();
      }
    })