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

// Pre/Post Functions

// Create new performance docs for each player when a tournament is created

tournamentSchema.post('save', async function(doc) {
    console.log('ready to create performance docs')

      const positions = doc.leaderboard.positions
      const prizeMoneyBreakdown = doc.leaderboard.prizeMoneyBreakdown

      positions.forEach( async (playerId) => {
        const playerPosition = positions.indexOf(playerId) + 1
        const prizeEarned = prizeMoneyBreakdown[playerPosition -1]

        const newPerformanceDoc = await Performance.create({
          playerId: playerId,
          tournamentId: doc._id,
          position: playerPosition,
          prizeEarned: prizeEarned
        })

        const newPerformancesArray = []
        newPerformancesArray.push(newPerformanceDoc)
        console.log(newPerformancesArray)
      })
    
  try {
    console.log('trying')
  } catch (error) {
    console.log(error)
  }
})

// Create model with schema

const Tournament = mongoose.model('Tournament', tournamentSchema)

// Export model to be used in Controllers

export default Tournament