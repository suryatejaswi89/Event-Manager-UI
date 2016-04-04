'use strict';

// Declare app level module which depends on views, and components
angular.module('eManager', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/home', {
          templateUrl: 'login/login.tpl.html',
          controller: 'LoginController'
      })
      .otherwise({redirectTo: '/home'});
}]);
