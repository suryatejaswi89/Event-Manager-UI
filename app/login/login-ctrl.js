var eManager = angular.module('eManager');

eManager.controller('LoginController', ['$scope', function($scope) {
    $scope.login = function(loginVendor){
        switch (loginVendor){
            case 'FB':{
                window.open('http://192.168.1.183:8080/', target="_blank")
            }
        }
    }

}]);