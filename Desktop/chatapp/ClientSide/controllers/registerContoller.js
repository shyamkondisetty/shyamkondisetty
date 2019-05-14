app.contoller('registerctrl',function($scope,$location){
    $scope.registersubmit=function(){
        $location.path('/dashboard');
    }
})