import express from 'express'

const router = express.Router()

// Import performance Controller

import { getAllPerformances, getPerformanceById, getPerformancesByPlayerId, getPerformancesByTournamentId, createPerformance, updatePerformance, deletePerformance } from '../controllers/performanceController.js'

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

router.post('/', createPerformance)

// Update a performance by ID

router.put('/:id', updatePerformance)

// Delete a performance by ID

router.delete('/:id', deletePerformance)

export default router