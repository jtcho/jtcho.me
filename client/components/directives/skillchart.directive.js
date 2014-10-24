'use strict';

angular.module('jtchoApp')
//SkillChart directive.
.directive('skillChart', ['$window',
	function($window) {
		return {
			restrict: 'A',	//restrict to attribute use
			scope: {data: '=chartData', tickMapper: '=mapper'},
			link: function(scope, element, attrs) {
				var d3 = $window.d3;
				
				var margin = {top: 70, right: 50, bottom: 30, left: 50},
				width = 400 - margin.left - margin.right,
				height = 400 - margin.top - margin.bottom,
				barPadding = 10;

				var container = d3.select(element[0]);	//somewhat of a misnomer
				var chart = container.append('svg');	//svg container

				//Create the chart div.
				chart
				.attr('width', width + margin.left + margin.right + 'px')
				.attr('height', height + margin.top + margin.bottom + 'px')
				.append('g')
				.attr('transform', 'translate(' + margin.left + ',' + 
					0 + ')')
				//Get presently empty array of 'rect' elements.
				.selectAll('rect')
				//'Enter' all the data points into the selection.
				.data(scope.data).enter().append('rect')
				.attr('y', function(d, i) {
					return margin.top + i * ( height / scope.data.length);
				})
				.attr('x', 0)
				.attr('height', height/scope.data.length - barPadding)
				.attr('width', 0)
				.attr('fill', function() {
					return '#f8953f';
				})
				.attr('opacity', function(d) {
					return d.level/6;
				})
				.transition()
				.duration(2000)
				.attr('width', function(d) {
					return d.level*45; //magic scaling constant :D
				});

				//add text labels to each bar
				chart.selectAll('text')
				.data(scope.data).enter().append('text')
				.text(function(d) {
					return d.skill;
				})
				.attr('fill', '#fff')
				.attr('x', function() {
					return margin.left + 20;
				})
				.attr('y', function(d, i) {
					console.log(d.skill + ', ' + i);
					return margin.top + (height/scope.data.length - barPadding)/2 + 
					barPadding/2 + (i * height/scope.data.length);
				});

				//add chart title
				chart.append('text')
					.style('font-size', '32px')
					.style('text-decoration', 'underline')
					.attr('x', margin.left + (width/2))
					.attr('y', 30)
					.attr('fill', '#f8953f')
					.attr('text-anchor', 'middle')
					.text(attrs.chartTitle);


				//set up axes
				var x = d3.scale.linear()
				.domain([0, 4])
				.range([0, width]);

				var y = d3.scale.linear()
				.domain([])
				.range([0, height]);

				var xAxis = d3.svg.axis()
				.scale(x)
				.orient('bottom')
				.ticks(4)
				.tickSize(10)
				.tickFormat(function(d) {
					return scope.tickMapper[d];
				});

				var yAxis = d3.svg.axis()
				.scale(y)
				.orient('left')
				.tickSize(0);

				chart.append('g')
				.attr('class', 'x axis')
				.attr('transform', 'translate('+margin.left +',' + (height + margin.top)+ ')')
				.call(xAxis);

				chart.append('g')
				.attr('class', 'y axis')
				.attr('transform', 'translate(' + margin.left +
					',' + margin.top + ')')
				.call(yAxis);

				//eyecandy animations on mouse hovers
				container.selectAll('rect')
				.on('mouseover', function () {
					console.log('hi');
					d3.select(this).transition()
					.attr('fill', '#fe5308')
					.attr('opacity', 1)
					.attr('width', function(d) {
						return d.level * 47;
					});
				})
				.on('mouseout', function() {
					d3.select(this).transition()
					.attr('fill', '#f8953f')
					.attr('opacity', function(d) {
						return d.level/6;
					})
					.attr('width', function(d) {
						return d.level * 45;
					});
				});
			}
		};
	}
]);


/**
 *
 */
 angular.module('jtchoApp')
 .controller('SkillCtrl', function($scope) {
 	
 	$scope.programData = [
 	{skill:'Photoshop', level: 5},
 	{skill:'Illustrator', level: 3.35},
 	{skill:'Mathematica', level:5},
 	{skill:'Matlab', level:1.7},
 	{skill:'Solidworks', level:5}
 	];

 	$scope.langData = [
 	{skill:'HTML/CSS', level:6.65},
 	{skill:'Javascript', level:3.35},
 	{skill:'Java', level:6.65},
 	{skill:'Python', level:5},
 	{skill:'C/C++', level:5},
 	{skill:'Swift', level:3.35}
 	];

 	$scope.apiData = [
 	{skill:'AngularJS', level: 5},
 	{skill:'Node.js', level: 3.35},
 	{skill:'MongoDB', level:2},
 	{skill:'D3', level: 3.35},
 	{skill:'Socket.IO', level: 2}
 	];

 	$scope.mapperData = {
		'0':'',
		'1':'meh',
		'2':'decent',
		'3':'solid',
		'4':'savvy'
	};
 });

