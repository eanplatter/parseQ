var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {

	this.postData = function(question) {
		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/question';
		$http({
			method: 'POST',
			data: {text: question, status: 'red'},
			url: url
		}).then(function(data) {
			deferred.resolve(data);
		})
		return deferred.promise;
	};


	this.getData = function() {
		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/question';
		return $http({
			method: 'GET',
			url: url
		})
	};

	this.editData = function(objectID, status) {
		var url = 'https://api.parse.com/1/classes/question/' + objectID;
		return $http({
			method: 'PUT',
			url:url,
			data: {status: status}
		})
	};

	this.deleteData = function(objectID) {
		var url = 'https://api.parse.com/1/classes/question/' + objectID;
		return $http({
			method: 'DELETE',
			url: url
		})
	};
});