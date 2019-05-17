app.controller('registerCtrl',function($scope,registerService){
    $scope.registersubmit=function(){
        let registerPageData={
            "firstname"    : $scope.firstname,
            "lasttname"    : $scope.firstname,
            "username"     : $scope.username,
            "useremail"    : $scope.useremail,
            "mobilenumber" : $scope.mobilenumber,
            "password"     : $scope.password
        }
        console.log(registerPageData);
        registerService.registerSubmitClick(registerPageData);
    }
})