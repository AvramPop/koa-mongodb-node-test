// Get mongoose object
var db = require('../lib/db');

// Prepare schema
var schema = new db.Schema({
  personId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Person'
  },
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
module.exports = db.model( 'Voter', schema );
