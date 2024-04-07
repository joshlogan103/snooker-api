import mongoose from 'mongoose'

const db = mongoose.connection

// Connect to database

mongoose.connect(process.env.DATABASE_URI)

db.on('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})

