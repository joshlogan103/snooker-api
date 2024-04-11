import express from 'express'

const router = express.Router()

// Import performance Controller

import { getAllAttendances, getAttendanceById, getAttendancesByUserId, getAttendancesByTournamentId, createAttendance, updateAttendance, deleteAttendance } from '../controllers/attendanceController.js'

// Import Auth Controller

import { verifyAuth } from '../utils/auth.js'

// Define routes

// Get all attendances

router.get('/', verifyAuth, getAllAttendances)

// Get a attendance by ID

router.get('/:id', verifyAuth, getAttendanceById)

// Get all performances by Player ID

router.get('/user/:userId', verifyAuth, getAttendancesByUserId)

// Get all performances by Tournament ID

router.get('/tournament/:tournamentId', verifyAuth,getAttendancesByTournamentId)

// Create a new performance

router.post('/', verifyAuth, createAttendance)

// Update a performance by ID

router.put('/:id', verifyAuth, updateAttendance)

// Delete a performance by ID

router.delete('/:id', verifyAuth, deleteAttendance)

export default router