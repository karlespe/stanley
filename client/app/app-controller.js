'use strict';
angular.module('app').controller('AppController', ['$scope', 'Video', 'HttpRequestTracker', function($scope, Video, httpRequestTracker) {

	$scope.title = "Videos:";
	
	$scope.videos = Video.query();

	$scope.hasPendingRequests = function () {
		return httpRequestTracker.hasPendingRequests();
	};
	
}]);