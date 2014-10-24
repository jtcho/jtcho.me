'use strict';

angular.module('jtchoApp')
.directive('stickyScroll', ['$window',
	function($window) {
		return function(scope) {
			angular.element($window).bind('scroll', function() {
				var navbar = angular.element('.navbar');
				var navbarOffset = 
					angular.element('#row_separator').offset().top;
				if (this.pageYOffset >= navbarOffset) {
					navbar[0].style.top = 0;
					navbar[0].style.position = 'fixed';
				}
				else {
					navbar[0].style.position = 'static';
				}
				scope.$apply();
			});
		}
	}
]);