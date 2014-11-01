'use strict';

angular.module('jtchoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'duScroll',
  'Game',
  'World',
  'Keyboard'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
    	// .when('portal', 'portal') //notnecessary
    	.otherwise('/');

    $locationProvider.html5Mode(true);
  });