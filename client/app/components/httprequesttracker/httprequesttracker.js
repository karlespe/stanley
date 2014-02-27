'use strict';
angular.module('HttpRequestTrackerService', []);
angular.module('HttpRequestTrackerService').factory('HttpRequestTracker', ['$http', function($http){

  var httpRequestTracker = {};
  httpRequestTracker.hasPendingRequests = function() {
    return $http.pendingRequests.length > 0;
  };

  return httpRequestTracker;
}]);