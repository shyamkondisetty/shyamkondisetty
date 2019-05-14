app.contoller('verifyctrl',function($scope,$location){
    $scope.verifyclicked=function(){
        $location.path('/changepassword');
    }
})