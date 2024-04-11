import express from 'express'

const router = express.Router()

//Import Auth controller

import { signin, signup, validateAdmin } from '../controllers/authController.js'
import { verifyAuth, verifyAdmin } from '../utils/auth.js'

// Allow a user to signin

router.post('/signin', signin)

// Allow a user to signup

router.post('/signup', signup)

// Verify a user is an admin to reach admin portal

router.post('/validateAdmin', verifyAuth, verifyAdmin, validateAdmin)

export default router