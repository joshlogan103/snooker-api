// Import modules

import 'dotenv/config.js'
import './config/database.js'
import express from 'express'
import cors from 'cors'

// Import Routers

import userRouter from './routes/userRouter.js'
import tournamentRouter from './routes/tournamentRouter.js'
import playerRouter from './routes/playerRouter.js'
import performanceRouter from './routes/performanceRouter.js'
import attendanceRouter from './routes/attendanceRouter.js'
import authRouter from './routes/authRouter.js'

// Create instance of express

const app = express()

// Middleware

app.use(express.json())
app.use(cors())

// Routes

app.use('/users', userRouter)
app.use('/tournaments', tournamentRouter)
app.use('/players', playerRouter)
app.use('/performances', performanceRouter)
app.use('/attendances', attendanceRouter)
app.use('/auth', authRouter)

// Initialize server

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})