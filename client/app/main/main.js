'use strict';

angular.module('jtchoApp').config(function ($stateProvider) {
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
			images: []
		}
	})
	//
	.state('projects.ants', {
		url: '/anttracker',
		templateUrl: 'app/project/project_template.html',
		controller: inject_project,
		data: {
			title: 'Ant Blob Tracker',
			desc: 'My research project during my 2012 research internship at Penn State. '+
			'I wrote a computer vision application that visually identified labeled '+
			'ants by color and could track interactions between them over time. Unfortunately '+
			'my time available to work in the lab was limited, so I did not finish completely,'+
			' but the project introduced me to crucial concepts of computer vision, '+
			'linear algebra, ' + 'and Markov chains.',
			image_folder: 'assets/images/anttracker/',
			images: [
				'main.png', '1.png', '2.png', '3.png'
			]
		}
	});
	// .state('helloworld', {
	// 	url:'/test',
	// 	templateUrl: 'components/portal/portal.html'
	// });
});

/**
 * Used to inject the custom data for each state.
 */
var inject_project = function($state, $scope) {
	$scope.projectTitle = $state.current.data.title;
	$scope.desc = $state.current.data.desc;
	$scope.imageFolder = $state.current.data.image_folder;
	$scope.images = $state.current.data.images;
}