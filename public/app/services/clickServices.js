angular.module('clickServices', [])

.factory('Click', function($http) {
  var clickFactory = {};

  clickFactory.create = function() {
     return $http.post('api/click');
  }

  clickFactory.get = function() {
     return $http.get('api/click');
  }

  clickFactory.getList = function() {
    return $http.get('api/clicklist');
  }

  return clickFactory;
});
