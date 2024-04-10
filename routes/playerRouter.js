import express from 'express'

const router = express.Router()

// Import player Controller

import { getAllPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer } from '../controllers/playerController.js'

import { verifyAuth, verifyAdmin } from '../utils/auth.js'

// Define routes

// Get all players

router.get('/', verifyAuth, getAllPlayers)

// Get a player by name

router.get('/:id', getPlayerById)

// Create a new player

router.post('/', createPlayer)

// Update a player by ID

router.put('/:id', updatePlayer)

// Delete a player by ID

router.delete('/:id', deletePlayer)

export default router