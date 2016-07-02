// Require todo model
var Candidate = require('../models/candidate');

module.exports = function *() {
  // Get request body
  var input = this.request.body;

  // Update todo item with given input ID
  yield Candidate.update( {_id: input.id}, {
    numberOfVotes: input.numberOfVotes,
    created_on: new Date(input.created_on),
    updated_on: new Date()});

  // Redirect to index
  this.redirect('/');
};
