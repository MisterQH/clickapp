angular.module('clickControllers', ['clickServices'])

.controller('clickCtrl', function($http, $location, $timeout, Click) {

  var app = this;

  this.regClick = function() {
    var address = 'http://ipv4.myexternalip.com/json';
    var regData = {};
    $http.get(address).then(function(result) {
        console.log(result.data.ip);
        regData.ip = result.data.ip;
        Click.create(regData);
        $location.path('/index');
    }, function(e) {
        alert("error");
    });

  };


  this.getClick = function() {
    Click.get().then(function(data) {
      app.clicks = data.data.clicks;

    });

    Click.getList().then(function(data) {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      app.clickList = [];
      data.data.forEach(function(click) {
          var date = new Date(click.date);
          click.day = date.getDate();
          click.month = months[date.getMonth()];
          click.year = date.getFullYear();
          click.hour = date.getHours()-1;
          click.minute = date.getMinutes();
          if(click.minute < 10){
            click.minute = "0" + String(click.minute);
          }
          click.second = date.getSeconds();
          if(click.second < 10){
            click.second = "0" + String(click.second);
          }
          click.milli = date.getMilliseconds();
          var dateStr = String(click.day) + " " + String(click.month) + " " + String(click.year) + " " +
                        String(click.hour) + ":" + String(click.minute) + ":" + String(click.second) + "." + String(click.milli);
          click.dateStr = dateStr;
          app.clickList.push(click);
      });
    });
  };
});
