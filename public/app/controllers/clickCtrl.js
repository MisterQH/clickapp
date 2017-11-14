angular.module('clickControllers', ['clickServices'])

.controller('clickCtrl', function($http, $location, $timeout, Click) {

  var app = this;

  this.regClick = function() {

    Click.create();
    $location.path('/index');
  };

  this.getClick = function() {
    Click.get().then(function(data) {
      app.data = data.data.clicks;
    });
  };
});
