import express from 'express'

const router = express.Router()

// Import tournament Controller

import { getAllTournaments, getTournamentById, createTournament, updateTournament, deleteTournament } from '../controllers/tournamentController.js'

// Import Auth Controller

import { verifyAuth, verifyAdmin } from '../utils/auth.js'

// Define routes

// Get all tournaments

router.get('/', getAllTournaments)

// Get a tournament by name

router.get('/:id', getTournamentById)

// Create a new tournament

router.post('/', verifyAuth, verifyAdmin, createTournament)

// Update a tournament by ID

router.put('/:id', verifyAuth, verifyAdmin, updateTournament)

// Delete a tournament by ID

router.delete('/:id', verifyAuth, verifyAdmin, deleteTournament)

export default router