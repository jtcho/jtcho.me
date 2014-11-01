'use strict';

angular.module('jtchoApp')
.controller('NavbarCtrl', function ($scope, $location, $document) {
	$scope.menu = [
	{
		'title': 'projects',
		'link': ' '
	},
	{
		'title': 'about',
		'link': ' '
	},
	{
		'title': 'skills',
		'link': ' '
	},
	{
		'title': 'blog',
		'link': 'http://blog.jtcho.me'
	},
	{
		'title': 'resume',
		'link': 'https://www.dropbox.com/s/e3a4y6bfp0qcu38/jtcho_resume.pdf'
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
				angular.element(document.getElementById(id)), 100, 1500);
		}
	};

	$scope.isCollapsed = true;

	$scope.isActive = function(route) {
		return route === $location.path();
	};
});