// Require todo model
var Candidate = require('../models/candidate');

module.exports = function *(id) {
  // Remove a todo by ID
  yield Candidate.remove({"_id": id});

  // Redirect to index
  this.redirect('/candidate');
};
