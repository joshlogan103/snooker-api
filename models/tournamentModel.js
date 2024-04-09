import mongoose from 'mongoose'

// Import Performance model for use in tournament post save functions

import Performance from './performanceModel.js'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

// Define Leaderboard sub-document schema for use in tournament schema

const leaderboardSchema = new Schema({
  positions: {
    type: [{
      type: ObjectId,
      ref: 'Player',
      required: true
    }] 
  },
  prizeMoneyBreakdown: {
    type: [Number],
    required: true
  }
})

// Define Location sub-document schema for use in tournament schema

const locationSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  venueName: {
    type: String,
    required: true
  }
})

// Define top-level schema for use in model

const tournamentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: locationSchema,
    required: true
  },
  prizeMoney: {
    type: Number,
    required: true
  },
  leaderboard: {
    type: leaderboardSchema,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
}, {timestamps: true})

// Create model with schema

const Tournament = mongoose.model('Tournament', tournamentSchema)

// Export model to be used in Controllers

export default Tournament