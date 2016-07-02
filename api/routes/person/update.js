// Require todo model
var Person = require('../models/person');

module.exports = function *() {
  // Get request body
  var input = this.request.body;

  // Update todo item with given input ID
  yield Person.update( {_id: input.id}, {
    name: input.name,
    surname: input.surname,
    canVote: input.canVote,
    uniqueIdentifier: input.uniqueIdentifier,
    gender: input.gender,
    dateOfBirth: input.dateOfBirth,
    livingArea: input.livingArea,
    created_on: new Date(input.created_on),
    updated_on: new Date()});

  // Redirect to index
  this.redirect('/');
};
