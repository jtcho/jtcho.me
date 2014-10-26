'use strict';

angular.module('jtchoApp')
  .controller('MainCtrl', function ($scope, $http, $document) {

	//
	$scope.projects = [
		{
			'title':'anttracker/1.png',
			'state': 'projects.ants',
			'desc': 'Ant Blob Tracker'
		},
		{
			'title':'cat.jpg',
			'state': '#',
			'desc': 'I\'m watching you...'
		}, 
		{
			'title':'cat.jpg',
			'state': '#',
			'desc': 'I\'m watching you...'
		}, 
		{
			'title':'cat.jpg',
			'state': '#',
			'desc': 'I\'m watching you...'
		}
	];

  });
