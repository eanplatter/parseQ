var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService) {

	$scope.getParseData = function() {
		parseService.getData().then(function(questions) {
			$scope.questions = questions.data.results;
			console.log($scope.questions)

		})
	};

	$scope.postData = function() {
		debugger;
		parseService.postData($scope.question)
			.then(function(data) {
				$scope.getParseData();
			}) 
		$scope.question = '';
	};

	$scope.changeStatus = function() {
		$scope.question.status = 'green'
	}

});