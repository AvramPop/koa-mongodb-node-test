// Get mongoose object
var db = require('../lib/db');

// Prepare schema
var schema = new db.Schema({
    personId: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Person'
  },
  numberOfVotes: {
    type: Number
  }
} );

// Return model with schema linked to collection
module.exports = db.model( 'Candidate', schema );
