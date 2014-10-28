'use strict';

angular.module('jtchoApp')
  .controller('MainCtrl', function ($scope, $http, $document) {

	//
	$scope.projects = [
		{
			'title':'nalda/cancun.png',
			'state': 'projects.nalda',
			'desc': 'NALDA Easy Travel'
		}, 
		{
			'title':'colorfeel/thumb.png',
			'state': 'projects.colorfeel',
			'desc': 'Colorfeel (HackMIT \'14)'
		}, 
		{
			'title':'aiura/2.png',
			'state': 'projects.aiura',
			'desc': 'Aiura RPG Minecraft Mod'
		},
		{
			'title':'anttracker/1.png',
			'state': 'projects.ants',
			'desc': 'Ant Blob Tracker'
		}
	];

  });
