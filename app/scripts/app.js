'use strict';

/**
 *
 */
 angular.module('jtchoApp', [
 	'ngAnimate',
 	'ngCookies',
 	'ngResource',
 	'ngRoute',
 	'ngSanitize',
 	'ngTouch',
 	'duScroll'
 	])
 .config(function ($routeProvider) {
 	$routeProvider
 	.when('/', {
 		templateUrl: 'views/main.html',
 		controller: 'MainCtrl'
 	})
 	.otherwise({
 		redirectTo: '/'
 	});
 });