'use strict';

/**
 *
 */
 angular.module('jtchoApp', [
 	'ngAnimate',
 	'ngCookies',
 	'ngResource',
 	'ngRoute',
 	'ngSanitize',
 	'ngTouch',
 	'duScroll'
 	])
//SkillChart directive.
.directive('skillChart', ['$window',
	function($window) {
		return {
			restrict: 'E',	//restrict to element use
			scope: {data: '=chartData'},
			link: function(scope, element) {
				var d3 = $window.d3;

				/*var lineFunction = d3.svg.line()
					.x(function(d) { return d.x; })
					.y(function(d) { return d.y; })
					.interpolate('linear');*/

				//build chart div
				var chart = d3.select(element[0]);

				chart.append('div')
				.attr('class', 'chart')
				.selectAll('div')
				.data(scope.data).enter().append('div')
				.transition().ease('elastic')
				.style('width', function(d) { return d.level + '%'; });

				/*d3.select(element[0])
				.append('svg').append('path')
				.attr('d', lineFunction([{'x': 0, 'y': 0}, 
					{'x': 0, 'y': 1000}]))
				.attr('stroke', '#c97022')
				.attr('stroke-width', 10)
				.attr('fill', 'none');*/
			}
		};
	}
	])
.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});


/**
 *
 */
 angular.module('jtchoApp')
 .controller('SkillCtrl', function($scope) {
 	$scope.skillData = [
 		{skill:'c++', level:100},
 		{skill:'python', level:50},
 		{skill:'java', level:100},
 		{skill:'javascript', level:60},
 		{skill:'c', level:80},
 		{skill:'latex', level:30}
 	];
 });

