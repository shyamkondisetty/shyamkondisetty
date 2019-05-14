app.contoller('changectrl',function($scope,$location){
    $scope.changepasswordclicked=function(){
        $location.path('/login');
    }
})
