// Require todo model
var Candidate = require('../models/candidate');

module.exports = function *(id) {
  // Find a todo item by ID
  var result = yield Candidate.findById(id);

  // Bad ID provided?
  if (!result) {
    this.throw(404, 'Invalid candidate id');
  }

  // Render template
  yield this.render('edit', {candidate: result});
};
