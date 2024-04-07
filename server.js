// Import modules

import './config/database.js'
import 'dotenv/config.js'
import express from 'express'
import cors from 'cors'

// Import Routers



// Create instance of express

const app = express()

// Middleware

app.use(express.json())
app.use(cors())

// Routes



// Initialize server

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})