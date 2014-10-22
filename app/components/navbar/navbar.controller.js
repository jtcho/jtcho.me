'use strict';

angular.module('jtchoApp')
.controller('NavbarCtrl', function ($scope, $location) {
$scope.menu = [
{
'title': 'portfolio',
'link': '#'
{
'title': 'resume',
'link': '#'
},
{
'title': 'about',
'link': '#'
},
{
'title': 'contact',
'link': '#'
}
];

$scope.isCollapsed = true;

$scope.isActive = function(route) {
return route === $location.path();
};
});