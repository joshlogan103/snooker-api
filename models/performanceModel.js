import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

// Define schema for use in model

const performanceSchema = new Schema({
  player: {
    type: [{
      type: ObjectId,
      ref: 'Player'
    }],
    required: true
  },
  tournament: {
    type: {
      type: ObjectId,
      ref: 'Tournament'
    },
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
})

// Create model with schema

const Performance = mongoose.model('Performance', performanceSchema)

// Export model to be used in Controllers

export default Performance