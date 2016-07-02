// Require todo model
var Person = require('../models/person');

module.exports = function *() {
  // Grab all todo items
  var results = yield Person.find({});
  
  // Return and embed in template
  yield this.render('index', {persons: results});
};
