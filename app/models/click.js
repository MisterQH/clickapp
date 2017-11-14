var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ClickSchema = new Schema({
  date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Click', ClickSchema);
