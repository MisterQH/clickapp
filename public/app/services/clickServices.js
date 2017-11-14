angular.module('clickServices', [])

.factory('Click', function($http) {
  var clickFactory = {};

  clickFactory.create = function(regData) {
     return $http.post('api/click', regData);
  }

  clickFactory.get = function() {
     return $http.get('api/click');
  }

  return clickFactory;
});
