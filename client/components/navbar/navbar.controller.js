'use strict';

angular.module('jtchoApp')
.controller('NavbarCtrl', function ($scope, $location, $document) {
	$scope.menu = [
	{
		'title': 'projects',
		'link': '#'
	},
	{
		'title': 'about',
		'link': '#'
	},
	{
		'title': 'skills',
		'link': '#'
	},
	{
		'title': 'resume',
		'link': '#'
	},
	{
		'title': 'contact',
		'link': 'mailto:jonathan.t.cho@gmail.com'
	}
	];

	//Scrolls to the given element id.
	$scope.scrollTo = function(id) {
	var scrollables = ['projects', 'about', 'skills'];
	if (scrollables.indexOf(id) >= 0) {
		$document.scrollToElement(
			angular.element(document.getElementById(id)), 200, 2000);
	}
	};

	$scope.isCollapsed = true;

	$scope.isActive = function(route) {
		return route === $location.path();
	};
});