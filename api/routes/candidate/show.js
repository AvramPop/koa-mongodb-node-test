// Require todo model
var Candidate = require('../models/candidate');

module.exports = function *(id) {
  // Find todo by ID
  var result = yield Candidate.findById(id);

  // No such todo?
  if (!result) {
    this.throw(404, 'Invalid candidate ID');
  }

  // Render in template
  yield this.render('show', {candidate: result});
};
