import 'dotenv/config.js'
import jwt from 'jsonwebtoken'

const verifyAuth = (req, res, next) => {
  const tokenHeader = req.headers.authorization
  const token = tokenHeader && tokenHeader.split(' ')[1]

  if (token == null) {
    return res.status(401).json({
      error: 'Authorization token required'
    })
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({ error: 'Token is invalid or expired' })
    }
    req.user = user
    next()
  })
}

const verifyAdmin = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({
      error: `User ${req.user.username} is not an admin`
    })
  }

  next()
}

export {
  verifyAuth,
  verifyAdmin
}