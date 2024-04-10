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
  fullName: {
    type: String
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  nationality: {
    type: String,
    required: true
  },
  worldRanking: {
    type: Number
  },
  lifetimeEarnings: {
    type: Number,
    default: 0
  },
  tournamentsPlayed: {
    type: [ObjectId],
    ref: 'Tournament'
    //required: true,
    //validate: [arrayMinLengthOne, 'Player must have at least one tournament played']
  }
}, {timestamps: true})

// Pre/Post functions

// Pre save, concatenate player's first and last name to full name field

playerSchema.pre('save', function() {
  this.fullName = this.firstName + ' ' + this.lastName
})

// Create model with schema

const Player = mongoose.model('Player', playerSchema)

// Export model to be used in Controllers

export default Player