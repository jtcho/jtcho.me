'use strict';

angular.module('jtchoApp')
  .controller('MainCtrl', function ($scope, $http, $document) {
  	//Scrolls to the given element id.
	$scope.scrollTo = function(id) {
		var scrollables = ['projects', 'about', 'skills'];
		if (scrollables.indexOf(id) >= 0) {
			$document.scrollToElement(
				angular.element(document.getElementById(id)), 200, 2000);
		}
	};

	//
	$scope.projects = [
		{
			'title':'cat.jpg',
			'link': '#',
			'desc': 'I\'m watching you...'
		},
		{
			'title':'cat.jpg',
			'link': '#',
			'desc': 'I\'m watching you...'
		}, 
		{
			'title':'cat.jpg',
			'link': '#',
			'desc': 'I\'m watching you...'
		}, 
		{
			'title':'cat.jpg',
			'link': '#',
			'desc': 'I\'m watching you...'
		}
	];

  });
