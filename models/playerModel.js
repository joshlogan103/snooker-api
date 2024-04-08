import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

// Define schema for use in model

const playerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  worldRanking: {
    type: Number
  },
  lifetimeEarnings: {
    type: Number,
    required: true
  },
  tournamentsPlayed: {
    type: [{
      type: ObjectId,
      ref: 'Tournament'
    }],
    required: true,
    validate: [arrayMinLengthOne, 'Player must have at least one tournament played']
  }
})

// Validator function to ensure at least one element is in the array

function arrayMinLengthOne(val) {
  return val.length > 0;
}

// Create model with schema

const Player = mongoose.model('Player', playerSchema)

// Export model to be used in Controllers

export default Player