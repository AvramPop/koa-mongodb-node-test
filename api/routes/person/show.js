// Require todo model
var Person = require('../models/person');

module.exports = function *(id) {
  // Find todo by ID
  var result = yield Person.findById(id);

  // No such todo?
  if (!result) {
    this.throw(404, 'Invalid person ID');
  }

  // Render in template
  yield this.render('show', {person: result});
};
