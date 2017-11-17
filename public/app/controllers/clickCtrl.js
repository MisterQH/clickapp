angular.module('clickControllers', ['clickServices'])

.controller('clickCtrl', function($http, $location, $timeout, Click) {

  var app = this;

  this.regClick = function() {

    Click.create();
    $location.path('/index');
  };


  this.getClick = function() {
    Click.get().then(function(data) {
      app.clicks = data.data.clicks;

    });

    Click.getList().then(function(data) {
      app.clickList = [];
      data.data.reverse().forEach(function(click) {
          app.clickList.push(click);
      });
    });
  };
});
