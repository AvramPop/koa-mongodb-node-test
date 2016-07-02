// Require todo model
var Candidate = require('../models/candidate');

module.exports = function *() {
  // Grab all todo items
  var results = yield Candidate.find({});

  // Return and embed in template
  yield this.render('index', {candidates: results});
};
