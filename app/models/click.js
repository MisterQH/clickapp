var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;


var ClickSchema = new Schema({
  date: {type: Date, default: Date.now},
  ip: {type: String}
});

autoIncrement.initialize(mongoose.connection);
ClickSchema.plugin(autoIncrement.plugin, 'Click');
var Counter = mongoose.model('Click', ClickSchema);

module.exports = mongoose.model('Click', ClickSchema);
