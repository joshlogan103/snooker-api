import express from 'express'

const router = express.Router()

// Import Performance Controller

import { getAllPerformances, getPerformanceById, getPerformancesByPlayerId, getPerformancesByTournamentId, createPerformance, updatePerformance, deletePerformance } from '../controllers/performanceController.js'

// Import Auth Controller

import { verifyAuth, verifyAdmin } from '../utils/auth.js'

// Define routes

// Get all performances

router.get('/', getAllPerformances)

// Get a performance by ID

router.get('/:id', getPerformanceById)

// Get all performances by Player ID

router.get('/player/:playerId', getPerformancesByPlayerId)

// Get all performances by Tournament ID

router.get('/tournament/:tournamentId', getPerformancesByTournamentId)

// Create a new performance

router.post('/', verifyAuth, verifyAdmin, createPerformance)

// Update a performance by ID

router.put('/:id', verifyAuth, verifyAdmin, updatePerformance)

// Delete a performance by ID

router.delete('/:id', verifyAuth, verifyAdmin, deletePerformance)

export default router