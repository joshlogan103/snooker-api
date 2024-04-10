import 'dotenv/config.js'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const verifyAuth = (req, res, next) => {
  const tokenHeader = req.headers.authorization
  const token = tokenHeader.substring(7)
  const validToken = jwt.verify(token, process.env.SECRET)

  if (!validToken || token.exp > new Date()) {
    res.status(498).json({
      tokenError: `Invalid or expired token. Re-authentication required`
    })
  }
  
  next()
}

const verifyAdmin = async (req, res, next) => {
  const { id } = req.body
  const user = await User.findById(id)

  if (!user) [
    res.status(400).json({
      error: 'User not found'
    })
  ]

  if (!user.isAdmin) {
    res.status(401).json({
      error: `User ${user.username} is not an admin`
    })
  }

  next()
}

export {
  verifyAuth,
  verifyAdmin
}