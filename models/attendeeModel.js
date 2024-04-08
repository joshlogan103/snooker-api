import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

// Define schema for use in model

const attendeeSchema = new Schema({
  user: {
    type: {
      type: ObjectId,
      ref: 'User'
    },
    required: true
  },
  tournament: {
    type: {
      type: ObjectId,
      ref: 'Tournament'
    },
    required: true
  },
  pricePaid: {
    type: Number
  },
  dateAttended: {
    type: Date,
    required: true
  }
})

// Create model with schema

const Attendee = mongoose.model('Attendee', attendeeSchema)

// Export model to be used in Controllers

export default Attendee