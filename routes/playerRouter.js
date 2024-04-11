import express from 'express'

const router = express.Router()

// Import player Controller

import { getAllPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer } from '../controllers/playerController.js'

// Import Auth Controller

import { verifyAuth, verifyAdmin } from '../utils/auth.js'

// Define routes

// Get all players

router.get('/', getAllPlayers)

// Get a player by name

router.get('/:id', getPlayerById)

// Create a new player

router.post('/', verifyAuth, verifyAdmin, createPlayer)

// Update a player by ID

router.put('/:id', verifyAuth, verifyAdmin, updatePlayer)

// Delete a player by ID

router.delete('/:id', verifyAuth, verifyAdmin, deletePlayer)

export default router