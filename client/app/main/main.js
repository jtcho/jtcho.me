'use strict';

angular.module('jtchoApp').config(function ($stateProvider, $uiViewScrollProvider) {
	$uiViewScrollProvider.useAnchorScroll();

	$stateProvider
	.state('main', {
		//Main State 
		//Lives at root '/',
		//Modularized into 3 views.
		url: '/',
		views: {
			'content': {
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl'
			},
			'portal': {
				templateUrl: 'components/portal/portal.html',
				controller: 'PortalCtrl'
			},
			'navbar': {
				templateUrl: 'components/navbar/navbar.html',
				controller: 'NavbarCtrl'
			}
		}
	})
	//Define parent "projects" state.
	.state('projects', {
		templateUrl: 'app/project/project.html',
		controller:function($scope) {},
		//Custom data to be overriden.
		data: {
			title: '',
			desc : '',
			image_folder: '',
			images: [],
			source_code: ''
		}
	})
	//
	.state('projects.ants', {
		url: '/anttracker',
		templateUrl: 'app/project/project_template.html',
		controller: function($state, $scope) {
			inject_project($state, $scope);
			
		},
		data: {
			title: 'Ant Blob Tracker',
			desc: 'My research project during my 2012 research internship at Penn State. '+
			'I wrote a computer vision application in C++ (OpenCV) that visually identified labeled '+
			'ants by color and could track interactions between them over time. Unfortunately '+
			'my time available to work in the lab was limited, so I did not finish completely,'+
			' but the project introduced me to crucial concepts of computer vision, '+
			'linear algebra, ' + 'and Markov chains.',
			image_folder: 'assets/images/anttracker/',
			images: [
				'main.png', '2.png', '1.png', '3.png'
			],
			source_code: 'http://github.com/jtcho/AntParticleTracker'
			//http://tinyurl.com/anttracking
		}
	})
	.state('projects.nalda', {
		title: '',
		desc: '',
		image_folder: '',
		images: [],
		source_code: ''
	})
	.state('projects.colorfeel') {
		title: '',
		desc: '',
		image_folder: '',
		images: [],
		source_code: ''
	})
	.state('projects.aiura') {
		title: '',
		desc: '',
		image_folder: '',
		images: [],
		source_code: ''
	})
	;
});

/**
 * Used to inject the custom data for each state.
 */
var inject_project = function($state, $scope) {
	window.scrollTo(0, 0);
	$scope.projectTitle = $state.current.data.title;
	$scope.desc = $state.current.data.desc;
	$scope.imageFolder = $state.current.data.image_folder;
	$scope.images = $state.current.data.images;
	$scope.sourceCode = $state.current.data.source_code;
}