var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {

	this.postData = function(question) {
		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/question';
		$http({
			method: 'POST',
			data: {text: question},
			url: url
		}).then(function(data) {
			deferred.resolve(data);
		})
		return deferred.promise;
	};


	this.getData = function() {
		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/question?order=-createdAt';
		return $http({
			method: 'GET',
			url: url
		})
	};
});