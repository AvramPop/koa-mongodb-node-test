// Get mongoose object
var db = require('../lib/db');

// Prepare schema
var schema = new db.Schema(
{
  Name: {
      type: String,
      required: true
  },
  Surname: {
      type: String,
      required: true
  },
  canVote: {
      type: Boolean,
      required: true
  },
  uniqueIdentifier: {
      type: String,
      required: true
  },
  gender: {
      type: String
  },
  dateOfBirth: {
      type: Date,
      required: true
  },
  livingArea: {
      type: String
  }

} );



// Return model with schema linked to collection
module.exports = db.model( 'Person', schema );
