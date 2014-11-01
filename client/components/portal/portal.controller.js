'use strict';

//temporary splash until we have time to make dat game
angular.module('jtchoApp')
.controller('PortalCtrl', function ($scope, $location, GameManager, WorldService) {

	this.game = GameManager;
	this.world = WorldService;

	$('.portal').css('background-image', 'url(\''+this.world.background+'\')');

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

angular.module('Game', [])
.service('GameManager', function() {
	//Add functions here.
});

angular.module('World', [])
.service('WorldService', function() {

	this.background = '/assets/images/sidescroller/sunset/background.png';
	
	//Actors whose sprites require animation.
	this.actors = [];

});