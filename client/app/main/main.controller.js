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
			'desc': 'Have a kitten, not done yet!'
		}, 
		{
			'title':'cat2.gif',
			'state': '#',
			'desc': 'Haz more cats!'
		}, 
		{
			'title':'cat3.gif',
			'state': '#',
			'desc': 'And even moar!'
		}
	];

  });
