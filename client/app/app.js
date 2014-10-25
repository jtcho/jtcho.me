'use strict';

angular.module('jtchoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'duScroll'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
    	// .when('portal', 'portal') //notnecessary
    	.otherwise('/');

    $locationProvider.html5Mode(true);
  });