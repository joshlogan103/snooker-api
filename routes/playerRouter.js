import express from 'express'

const router = express.Router()

// Import player Controller

import { getAllPlayers, getPlayerByName, createPlayer, updatePlayer, deletePlayer } from '../controllers/playerController.js'

// Define routes

// Get all players

router.get('/', getAllPlayers)

// Get a player by name

router.get('/:name', getPlayerByName)

// Create a new player

router.post('/', createPlayer)

// Update a player by ID

router.put('/:id', updatePlayer)

// Delete a player by ID

router.delete('/:id', deletePlayer)

export default router