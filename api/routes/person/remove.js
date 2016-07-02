// Require todo model
var Person = require('../models/person');

module.exports = function *(id) {
  // Remove a todo by ID
  yield Person.remove({"_id": id});

  // Redirect to index
  this.redirect('/');
};
