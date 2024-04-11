import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

// Define schema for use in model

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    minlength: [5, 'Username must include a minimum of 6 characters'],
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

// Check password meets requirements prior to save

userSchema.pre('save', async function (next) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (this.isModified('password')) {
    if (!regex.test(this.password)) {
      next(new Error('Password must be at least 8 characters long, and have at least one upper case letter, lower case letter, number, and symbol'))
    }
    try {
      this.password = await bcrypt.hash(this.password, 8)
      next()
    } catch (error) {
      next(error)
    }
  }
  next()
})

// Create model with schema

const User = mongoose.model('User', userSchema)

// Export model to be used in Controllers

export default User