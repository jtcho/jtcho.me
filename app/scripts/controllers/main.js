'use strict';

/**
 * @ngdoc function
 * @name jtchoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jtchoApp
 */
 angular.module('jtchoApp')
.controller('MainCtrl', function ($scope, $document) {

	$scope.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];

	//Scrolls to the given element id.
	$scope.scrollTo = function(id) {
		var scrollables = ['projects', 'about', 'skills'];
		if (scrollables.indexOf(id) >= 0) {
			$document.scrollToElement(
				angular.element(document.getElementById(id)), 30, 2000);
		}
	};
});
