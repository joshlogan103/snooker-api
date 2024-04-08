import express from 'express'

const router = express.Router()

// Import tournament Controller

import { getAllTournaments, getTournamentByName, createTournament, updateTournament, deleteTournament } from '../controllers/tournamentController.js'

// Define routes

// Get all tournaments

router.get('/', getAllTournaments)

// Get a tournament by name

router.get('/:name', getTournamentByName)

// Create a new tournament

router.post('/', createTournament)

// Update a tournament by ID

router.put('/:id', updateTournament)

// Delete a tournament by ID

router.delete('/:id', deleteTournament)

export default router