import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Define schema for use in model

const userSchema = new Schema({
  username: {
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
  },
  createdAt: {
    type: Date,
    required: true,
    immutable: true,
    default: () => Date.now()
  }
})

// Create model with schema

const User = mongoose.Model('User', userSchema)

// Export model to be used in Controllers

export default User