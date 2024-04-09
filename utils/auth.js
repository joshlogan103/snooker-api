import 'dotenv/config.js'
import jwt from 'jsonwebtoken'

const isUserLoggedIn = async (req, res, next) => {
  try {
    const { token = false } = req.cookies
    if (token) {
      const payload = await jwt.verify(token, process.env.SECRET)
      req.payload = payload
      next()
    } else {
      throw "Not logged in"
    }
  } catch (error) {
    res.status(400).json({
      'error': error
    })
  }
}

export default isUserLoggedIn