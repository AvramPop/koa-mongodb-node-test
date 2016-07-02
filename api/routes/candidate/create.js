// Require todo model
var Candidate = require('../models/candidate');

module.exports = function *() {
  // Parse input from request body
  var numberOfVotes = this.request.numberOfVotes;

  // Get current date
  var creationDate = new Date();

  // Create new todo Mongoose model
  var candidate = new Candidate();

  // Set properties
  candidate.numberOfVotes = input.numberOfVotes;

  candidate.created_on = creationDate;
  candidate.updated_on = creationDate;

  // Save in collection
  yield candidate.save();

  // Redirect to index
  this.redirect('/');
};
