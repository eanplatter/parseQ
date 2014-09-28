var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'YupD6LnOrpVJsZ6O0CTQ8X2Qz6g0Jpk7270uWJRK', 'X-Parse-REST-API-Key': 'JYRPLQOFOKYBgdzV8DizJAAoHMqmu14rIO2OYk42'}
      return config;
    }
  };
});