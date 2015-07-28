'use strict';

/**
 * @ngdoc overview
 * @name iwsApp
 * @description
 * # iwsApp
 *
 * Main module of the application.
 */
angular
  .module('iwsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/kitchen', {
        templateUrl: 'views/kitchen.html',
        controller: 'KitchenCtrl',
        controllerAs: 'kitchen'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
