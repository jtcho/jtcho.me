'use strict';

angular.module('jtchoApp')
.directive('stickyScroll', ['$window',
	function($window) {
		return function(scope) {
			var currWindow = angular.element($window);
			currWindow.bind('scroll', function() {
				if (currWindow.width() > 980) {
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
				}
			});
		}
		return function() {};
	}
]);