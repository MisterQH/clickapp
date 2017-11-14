var Click = require('../models/click');


module.exports = function(router) {

  //New click
  router.post('/click', function(req, res) {
    var click = new Click();
    var date = new Date();
    click.ip = req.body.ip;
    click.date = date;
    click.save(function(err) {
    if (err) {
      res.json({success: false, message: 'Error!'});
    } else {
      res.json({success: true, message: 'Click added!'});
    }
    });
    
  });

  //Get clicks
  router.get('/click', function(req, res) {
    Click.find({}, function(err, clicks) {
      var clickCount = 0;
      clicks.forEach(function() {
        clickCount += 1;
      });

      res.json({'clicks': clickCount});
    });
  });

  return router;
}
