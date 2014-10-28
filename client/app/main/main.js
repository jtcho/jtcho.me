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
			link: '',
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
		url: '/flynalda',
		templateUrl: 'app/project/project_template.html',
		controller: function($state, $scope) { inject_project($state, $scope); },
		data: {
			title: 'NALDA Easy Travel',
			link: 'http://flynalda.com',
			desc: 'An ongoing side-project I took on for a friend. I designed a website for his NALDA project, '+
			'a service that helps students finance and plan their trips to Cancun. By qualifying various '+
			'attractions by word of mouth and aggregate opinion, we can recommend various activities and '+
			'venues to clients, as well as NALDA-specific discounts.',
			image_folder: 'assets/images/nalda/',
			images: [
				'1.png', '2.png', '3.png'
			],
			source_code: 'https://github.com/jtcho/NALDA'
		}
	})
	.state('projects.colorfeel', {
		url: '/colorfeel',
		templateUrl: 'app/project/project_template.html',
		controller: function($state, $scope) { inject_project($state, $scope); },
		data: {
			title: 'Colorfeel',
			link: 'http://hackmit2014.challengepost.com/submissions/27794-colorfeel',
			desc: 'My first iOS project and submission for HackMIT Fall 2014. '+
			'The blurb from the submission: '+
			'Coming from campuses where mental health issues have been a growing concern, '+
			'we wanted to create a tool to help students self-identify trends of depression '+
			'as they emerge. Colorfeel is a mood monitoring app that utilizes colors to help '+
			'users record and identify patterns in their daily emotions. Colors are universal '+
			'and can be interpreted differently from person to person, which allows for a wide '+
			'range of emotion to be expressed without the use of words.',
			image_folder: 'assets/images/colorfeel/',
			images: [
				'main.png', '1.png', '2.png'
			],
			source_code: 'https://github.com/mikehcheng/Colorfeel'
		}
	})
	.state('projects.aiura', {
		url: '/aiurarpg',
		templateUrl: 'app/project/project_template.html',
		controller: function($state, $scope) { inject_project($state, $scope); },
		data: {
			title: 'Aiura/Aelfcraft RPG (Minecraft Bukkit Mod)',
			desc: 'A fun side-project I undertook during my junior/senior years in high school. I built a '+
			'full scale multiplayer RPG mod for the game Minecraft using Bukkit. ' +
			'This project taught me a surprising amount of Java that I did not anticipate having to learn: '+
			'mostly Reflection, with a large appreciation for reverse-engineering compiled and obfuscated '+
			'code. Bukkit is now discontinued, but you can see the source code and pictures!',
			image_folder: 'assets/images/aiura/',
			images: [
				'main.png', '1.png', '2.png', '3.png', '4.png', '5.png'
			],
			source_code: 'https://github.com/jtcho/AelfCraft'
		}
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
	$scope.link = $state.current.data.link;

}