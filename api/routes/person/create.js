// Require todo model
var Person = require('../models/person');

module.exports = function *() {
  // Parse input from request body
  var name = this.request.name;
  var surname = this.request.surname;
  var canVote = this.request.canVote;
  var uniqueIdentifier = this.request.uniqueIdentifier;
  var dateOfBirth = this.request.dateOfBirth;

  if(this.request.gender != null){
    var gender = this.request.gender;
  } else console.log('Person ' + name + 'dowsent have a gender!');

  if(this.request.livingArea != null){
    var livingArea = this.request.livingArea;
  } else console.log('Person ' + name + 'dowsent have a livingArea!');

  // Get current date
  var creationDate = new Date();

  // Create new todo Mongoose model
  var person = new Person();

  // Set properties
  person.name = input.name;
  person.surname = input.surname;
  person.canVote = input.canVote;
  person.uniqueIdentifier = input.uniqueIdentifier;
  person.dateOfBirth = input.dateOfBirth;
  person.gender = input.gender;
  person.livingArea = input.livingArea;

  person.created_on = creationDate;
  person.updated_on = creationDate;

  // Save in collection
  yield person.save();

  // Redirect to index
  this.redirect('/');
};
