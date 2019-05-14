app.contoller('forgetctrl',function($scope,$location){
    $scope.sendcodeclicked=function(){
        $location.path('/verify');
    }
})