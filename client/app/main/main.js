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
		controller:function() {
			console.log('Invoked.');
		},
		data: {
		}
	})
	//
	.state('projects.ants', {
		url: '/anttracker',
		template: '<h2>AntTracker</h1>',
		controller: function() {
			console.log('AAAAH');
		}
	});
	// .state('helloworld', {
	// 	url:'/test',
	// 	templateUrl: 'components/portal/portal.html'
	// });
});