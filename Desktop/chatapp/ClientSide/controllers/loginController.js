app.contoller('verifyctrl',function($scope,$location){
    $scope.loginsubmit=function(){
        $location.path('/dashboard');
    }
})