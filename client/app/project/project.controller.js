'use strict';

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