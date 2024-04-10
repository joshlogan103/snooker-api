import 'dotenv/config.js'
import jwt from 'jsonwebtoken'

const verifyAuth = (req, res, next) => {
  const tokenHeader = req.headers.authorization
  const token = tokenHeader && tokenHeader.substring(7)

  if (token == null) {
    return res.status(401).json({
      error: 'Authorization token required'
    })
  }

  const validToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

  if (!validToken || token.exp < new Date()) {
    res.status(498).json({
      tokenError: `Invalid or expired token. Re-authentication required`
    })
  }
  
  next()
}

const verifyAdmin = async (req, res, next) => {
  if (!req.user.isAdmin) {
    res.status(403).json({
      error: `User ${req.user.username} is not an admin`
    })
  }

  next()
}

export {
  verifyAuth,
  verifyAdmin
}