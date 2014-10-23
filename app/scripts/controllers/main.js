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
	//Scrolls to the given element id.
	$scope.scrollTo = function(id) {
		var scrollables = ['projects', 'about', 'skills'];
		if (scrollables.indexOf(id) >= 0) {
			$document.scrollToElement(
				angular.element(document.getElementById(id)), 50, 2000);
		}
	};
});

