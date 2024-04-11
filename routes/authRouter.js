import express from 'express'

const router = express.Router()

//Import Auth controller

import { login, signup, validateAdmin, verifyLoggedIn } from '../controllers/authController.js'
import { verifyAuth, verifyAdmin } from '../utils/auth.js'

// Allow a user to login

router.post('/login', login)

// Allow a user to signup

router.post('/signup', signup)

// Verify a user is logged in

router.post('/verifyLoggedIn', verifyAuth, verifyLoggedIn)

// Verify a user is an admin to reach admin portal

router.post('/validateAdmin', verifyAuth, verifyAdmin, validateAdmin)

export default router