import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Define schema for use in model

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    minlength: [6, 'Username must include a minimum of 6 characters'],
    maxlength: [30, 'Usename must contain a maximum of 30 characters'],
    match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'],
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {timestamps: true})

// Create model with schema

const User = mongoose.model('User', userSchema)

// Export model to be used in Controllers

export default User