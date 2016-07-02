// Require todo model
var Candidate = require('../models/candidate');

module.exports = function *() {
  // Parse input from request body
  //var numberOfVotes = this.request.numberOfVotes;

  // when creating a new candidate it will always have 0 votes
  var numberOfVotes = 0;

  // Get current date
  var creationDate = new Date();

  // Create new todo Mongoose model
  var candidate = new Candidate();

  // Set properties
  //candidate.numberOfVotes = input.numberOfVotes;

  candidate.numberOfVotes = 0;

  candidate.created_on = creationDate;
  candidate.updated_on = creationDate;

  // Save in collection
  yield candidate.save();

  // Redirect to index
  this.redirect('/candidate');
};
