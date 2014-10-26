'use strict';

angular.module('jtchoApp')
.directive('stickyScroll', ['$window',
	function($window) {
		return function(scope) {
			angular.element($window).bind('scroll', function() {
				var navbar = angular.element('.navbar')[0];
				var navbarOffset = 
					angular.element('#row_separator').offset().top;
				if (this.pageYOffset >= navbarOffset) {
					navbar.style.top = '0px';
					navbar.style.position = 'fixed';
					angular.element('#projects').css('margin-top', '100px');
				}
				else {
					navbar.style.position = 'static';
					angular.element('#projects').css('margin-top', '0px');
				}
				scope.$apply();
			});
		}
		return function() {};
	}
]);