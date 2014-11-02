'use strict';

//temporary splash until we have time to make dat game
angular.module('jtchoApp')
.controller('PortalCtrl', function ($scope, GameManager, WorldService, KeyboardService) {

	this.game = GameManager;

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

		hero.x += vecs[key];
		if (hero.dir < 0 && hero.x < -50)
			hero.x = currWindow.width();

		else if (hero.dir > 0 && hero.x > currWindow.width())
			hero.x = -55;

		//force update
		$scope.$apply();
	});

	$('<img/>').attr('src', '/assets/images/day1.gif').load(function() {
   		$(this).remove(); // prevent memory leaks as @benweet suggested
   		var splash1 = angular.element('.portal h1');
		var splash2 = angular.element('.portal h2');
		splash1.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			splash2.css('opacity', '1.0');
			splash2.addClass('animated bounceInUp');
		});

		splash1.addClass('animated zoomIn');
		splash1.css('opacity', '1.0');
	});

});

/*
 * Game service.
 */
angular.module('Game', [])
.service('GameManager', function() {
	//Add functions here.
});

/*
 * World service.
 */
angular.module('World', [])
.service('WorldService', ['$rootScope', function($rootScope) {

	this.aP = '/assets/images/sidescroller/';
	this.tP = 'sunset';

	var currentTime = new Date();
	var hours = currentTime.getHours();

	//DUSK
	if (hours > 19 || hours < 5) {
		this.tP = 'dusk';
		var duskFilter = 'brightness(0);';
		$('.portal h1').css('color', '#e0b661');
		$('.portal h2').css('color', '#e0b661');

		$rootScope.timeAlpha = 0.5;
	}


	this.background = this.aP + this.tP + '/background.png';

	//@todo add changing background based on time of day
	var stageElements = [
		'portal', 'clouds', 'clouds_back', 'ruins', 'foliage_back', 'foliage_front', 'tent',
		'grass', 'stars'
	];

	for (var i = 0; i < stageElements.length; i++) {
		$('.'+stageElements[i]).css('background-image', 
			'url(\'' + this.aP + this.tP + '/' + stageElements[i] + '.png\')');
	}
}]);

/*
 *
 */
 angular.module('Keyboard', [])
 .service('KeyboardService', function($document) {

 	var RIGHT = 'right',
     	LEFT  = 'left';

    var keyboardMap = {
	    37: LEFT,
	    39: RIGHT
  	};

 	this.init = function() {
 		var self = this;
 		this.keyEventHandlers = [];
 		$document.bind('keydown', function(evt) {
 			var key = keyboardMap[evt.which];

 			if (key) {
 				//
 				evt.preventDefault();
 				self._handleKeyEvent(key, evt);
 			}
 		});
 	};

 	this.on = function(cb) {
 		this.keyEventHandlers.push(cb);
 	};

 	this._handleKeyEvent = function(key, evt) {
 		var callbacks = this.keyEventHandlers;
 		if (! callbacks) {	return;	}

 		evt.preventDefault();

 		if (callbacks) {
 			for (var x = 0; x < callbacks.length; x++) {
 				var cb = callbacks[x];
 				cb(key, evt);
 			}
 		}
 	};
 });














