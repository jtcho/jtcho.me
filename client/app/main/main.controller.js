'use strict';

angular.module('jtchoApp')
  .controller('MainCtrl', function ($scope, $http, $document) {

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
