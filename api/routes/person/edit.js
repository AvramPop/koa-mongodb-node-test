// Require todo model
var Person = require('../models/person');

module.exports = function *(id) {
  // Find a todo item by ID
  var result = yield Person.findById(id);

  // Bad ID provided?
  if (!result) {
    this.throw(404, 'Invalid person id');
  }

  // Render template
  yield this.render('edit', {person: result});
};
