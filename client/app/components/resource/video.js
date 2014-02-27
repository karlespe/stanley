'use strict';
angular.module('resource.video', ['ngResource']);
angular.module('resource.video').factory('Video', ['$resource', function ($resource) {

	return $resource("http://localhost:8080/angularjs_test/api/video/:id");

}]);