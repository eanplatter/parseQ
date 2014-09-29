var app = angular.module('parseQ', []);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});

app.run(function($rootScope, parseService) {
		parseService.getData().then(function(questions) {
			$rootScope.questions = questions.data.results;
			console.log($rootScope.questions)
		})
})