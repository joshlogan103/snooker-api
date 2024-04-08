import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

// Define schema for use in model

const attendanceSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  tournament: {
    type: ObjectId,
    ref: 'Tournament',
    required: true
  },
  pricePaid: {
    type: Number
  },
  dateAttended: {
    type: Date,
    required: true
  }
}, {timestamps: true})

// Create model with schema

const Attendance = mongoose.model('Attendance', attendanceSchema)

// Export model to be used in Controllers

export default Attendance