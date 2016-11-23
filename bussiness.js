var app = angular.module("myApp", ['ngRoute']);
app.controller("myCtrl", ["$scope", function($scope){
    $scope.myPattern = 'https://images.unsplash.com/photo-1469521669194-babb45599def?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=e32c5d5b5ea606e27bf29c40b4b3bb4f'
    
}])