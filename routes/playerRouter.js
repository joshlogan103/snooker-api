import express from 'express'

const router = express.Router()

// Import player Controller

import { getAllPlayers, getPlayerById, getPlayerByName, createPlayer, updatePlayer, deletePlayer } from '../controllers/playerController.js'

// Import Auth Controller

import { verifyAuth, verifyAdmin } from '../utils/auth.js'

// Define routes

// Get all players

router.get('/', getAllPlayers)

// Get a player by id

router.get('/:id', getPlayerById)

// Get a player by name

router.get('/name/:fullName', getPlayerByName)

// Create a new player

router.post('/', verifyAuth, verifyAdmin, createPlayer)

// Update a player by ID

router.put('/:id', verifyAuth, verifyAdmin, updatePlayer)

// Delete a player by ID

router.delete('/:id', verifyAuth, verifyAdmin, deletePlayer)

export default router