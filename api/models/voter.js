// Get mongoose object
var db = require('../lib/db');

// Prepare schema
var schema = new db.Schema(
{
  voterHasVoted: {
    type: Boolean,
    required: true
  },
  voterIsValid: {
    type: Boolean,
    required: true
  }

} );



// Return model with schema linked to collection
module.exports = db.model( 'tests', schema );
