import express from 'express'

const router = express.Router()

//Import Auth controller

import { signin, signup } from '../controllers/authController.js'

// Allow a user to signin

router.post('/signin', signin)

// Allow a user to signup

router.post('/signup', signup)

export default router