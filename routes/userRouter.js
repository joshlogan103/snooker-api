import express from 'express'

const router = express.Router()

// Import user Controller

import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js'

// Define routes

// Get all users

router.get('/', getAllUsers)

// Get a user by ID

router.get('/:id', getUserById)

// Create a new user

router.post('/', createUser)

// Update a user by ID

router.put('/:id', updateUser)

// Delete a user by ID

router.delete('/:id', deleteUser)

export default router

