import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Define schema for use in model

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
})

// Create model with schema

const User = mongoose.Model('User', userSchema)

// Export model to be used in Controllers

export default User