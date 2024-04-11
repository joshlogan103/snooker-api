import express from 'express'

const router = express.Router()

// Import user Controller

import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js'

// Import Auth Controller

import { verifyAuth, verifyAdmin } from '../utils/auth.js'

// Define routes

// Get all users

router.get('/', verifyAuth, verifyAdmin, getAllUsers)

// Get a user by ID

router.get('/:id', verifyAuth, verifyAdmin, getUserById)

// Create a new user

router.post('/', verifyAuth, verifyAdmin, createUser)

// Update a user by ID

router.put('/:id', verifyAuth, verifyAdmin, updateUser)

// Delete a user by ID

router.delete('/:id', verifyAuth, verifyAdmin, deleteUser)

export default router

