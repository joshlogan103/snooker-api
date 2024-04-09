import 'dotenv/config.js'
import jwt from 'jsonwebtoken'

const verifyAuth = (req, res, next) => {
  const tokenHeader = req.headers.authization
  const token = tokenHeader.substring(7)
  const validToken = jwt.verify(token, process.env.SECRET)
  
  if (!validToken || token.exp > new Date()) {
    res.status(498).json({
      tokenError: `Invalid or expired token. Re-authentication required`
    })
  }
  
  next()
}

export default verifyAuth