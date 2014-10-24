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

				
				var margin = {top: 0, right: 0, bottom: 0, left: 0},
					width = 350 - margin.left - margin.right,
					height = 350 - margin.top - margin.bottom;

				var x = d3.scale.linear()
					.domain([0, 5])
					.range([0, 5]);

				var xAxis = d3.svg.axis()
					.scale(x)
					.ticks(5)
					.tickSize(6)
					.orient('bottom');

				console.log(xAxis);

				var container = d3.select(element[0]);
				//Create the chart div.
				container.append('svg')
				.attr('class', 'chart')
				.style('width', width + margin.left + margin.right + 'px')
				.style('height', height + margin.top + margin.bottom + 'px')
				//Get presently empty array of 'div' elements.
				.selectAll('div')
				//"Enter" all the data points into the selection.
				.data(scope.data).enter().append('div')
				.transition().ease('elastic')
				.style('width', function(d) { return d.level + '%'; });

				var chart = container.selectAll('div');
				//Add mouse-over highlighting!
				chart.selectAll('div')
				.on('mouseover', function () {
					d3.select(this).transition()
					.style('background-color', '#fe5308');
				})
				.on('mouseout', function() {
					d3.select(this).transition()
					.style('background-color', '#f8953f');
				});
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

