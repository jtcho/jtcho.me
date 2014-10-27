'use strict';

//This is for later, when we have a gallery view at the bottom
//of each project page.
angular.module('jtchoApp')
	.controller('ProjectCtrl', function ($scope, $http, $document) {
		$scope.allProjects = [
			{
				'title': '',
				'state': '',
				'desc': ''
			}
		];
	});