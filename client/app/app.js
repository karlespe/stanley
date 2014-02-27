'use strict';
var app = angular.module('app', ['ngRoute', 'HttpRequestTrackerService', 'resource.video']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', { templateUrl: 'login/login.html', controller: 'loginController' });
	$routeProvider.when('/index', { templateUrl: 'index.html', controller: 'appController' });
	$routeProvider.otherwise({ redirectTo: '/index' });
}]);

