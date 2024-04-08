import express from 'express'

const router = express.Router()

// Import performance Controller

import { getAllAttendances, getAttendanceById, getAttendancesByUserId, getAttendancesByTournamentId, createAttendance, updateAttendance, deleteAttendance } from '../controllers/attendanceController.js'

// Define routes

// Get all attendances

router.get('/', getAllAttendances)

// Get a attendance by ID

router.get('/:id', getAttendanceById)

// Get all performances by Player ID

router.get('/user/:userId', getAttendancesByUserId)

// Get all performances by Tournament ID

router.get('/tournament/:tournamentId', getAttendancesByTournamentId)

// Create a new performance

router.post('/', createAttendance)

// Update a performance by ID

router.put('/:id', updateAttendance)

// Delete a performance by ID

router.delete('/:id', deleteAttendance)

export default router