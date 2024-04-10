import mongoose from 'mongoose'
import Player from './playerModel.js'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

// Define schema for use in model

const performanceSchema = new Schema({
  playerId: {
    type: ObjectId,
    ref: 'Player',
    required: true
  },
  tournamentId: {
    type: ObjectId,
    ref: 'Tournament',
    required: true
  },
  position: {
    type: Number,
    required: true
  },
  prizeEarned: {
    type: Number,
    required: true
  }
}, {timestamps: true})

// Post save method to update Player lifetime earnings on the Player document

performanceSchema.post('save', async function (doc) {
  try {
    const results = await Performance.aggregate([
      {$match: {playerId: doc.playerId}},
      {$group: {_id: null, totalEarnings: {$sum: "$prizeEarned"}}}
    ])

    const lifetimeEarningsValue = results.length > 0 ? results[0].totalEarnings : 0

    const playerToUpdate = await Player.findById(doc.playerId)

    if (playerToUpdate) {
      playerToUpdate.lifetimeEarnings = lifetimeEarningsValue
      await playerToUpdate.save()
    } else {
      console.log('Player does not exist')
    }

  } catch (error) {
    console.log(error)
  }
})

performanceSchema.post('findOneAndDelete', async function(doc) {

    const { playerId, prizeEarned } = doc
    const playerToUpdate = await Player.findById(playerId)

    if (!playerToUpdate) {
      return console.log('Did not find a player to update')
    }

    playerToUpdate.lifetimeEarnings -= prizeEarned
    await playerToUpdate.save()
})

// Create model with schema

const Performance = mongoose.model('Performance', performanceSchema)

// Export model to be used in Controllers

export default Performance