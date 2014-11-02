'use strict';

//temporary splash until we have time to make dat game
angular.module('jtchoApp')
.controller('PortalCtrl', function ($scope, KeyboardService) {
	
	initPortal($scope);

	KeyboardService.init();

	var currWindow = angular.element(window);

	$scope.hero = {
		x: currWindow.width()/2,
		dir: 1
	};

	//Move the hero on keyboard inputs.
	KeyboardService.on(function(key) {
		var vecs = {
			'left': -10,
			'right': 10
		}

		var hero = $scope.hero;

		if (hero.dir != vecs[key]/10) {
			hero.x += 51 * hero.dir; //half of hero width (101)
			hero.dir *= -1;
		}

		if (!(hero.dir < 0 && hero.x < - 50) && !(hero.dir > 0 && hero.x > currWindow.width() - 100)) {
			hero.x += vecs[key];
		}

		//force update
		$scope.$apply();
	});

	var splash1 = angular.element('.portal h1');
	var splash2 = angular.element('.portal h2');
	splash1.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		splash2.css('opacity', '1.0');
		splash2.addClass('animated bounceInUp');
	});

	splash1.addClass('animated zoomIn');
	splash1.css('opacity', '1.0');
});

/**
 * Initializes the portal depending on the given time of day.
 */
var initPortal = function($rootScope) {
	var aP = '/assets/images/sidescroller/';
	var tP = 'sunset';

	var currentTime = new Date();
	var hours = currentTime.getHours();

	if (! (hours > 6 && hours < 19)) {
		$rootScope.timeAlpha = 0.5;
		$('.portal h1').css('color', '#e0b661');
		$('.portal h2').css('color', '#e0b661');
	}
	else
		$rootScope.timeAlpha =1.0;

	//SUNSET, 5PM - 7PM
	if (hours > 17 && hours < 19) {
		tP = 'sunset';
	}
	//DUSK, 7PM - 9PM
	else if (hours > 19 && hours < 21) {
		tP = 'dusk';
	}
	//EVENING, 9PM - 12AM
	else if (hours > 21 && hours < 24) {
		tP = 'evening';
	}
	//NIGHT, 12AM - 6AM
	else if (hours > 0 && hours < 6) {
		tP = 'night';
	}
	//DAY, 6AM - 5PM
	else {
		tP = 'day';
	}

	//Update all of the css elements depending on the time of day.
	var stageElements = [
		'portal', 'clouds', 'clouds_back', 'ruins', 'foliage_back', 'foliage_front', 'tent',
		'grass', 'stars'
	];

	for (var i = 0; i < stageElements.length; i++) {
		$('.'+stageElements[i]).css('background-image', 
			'url(\'' + aP + tP + '/' + stageElements[i] + '.png\')');
	}
}
