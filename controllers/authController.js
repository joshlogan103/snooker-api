import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import User from '../models/userModel.js'

const { ACCESS_TOKEN_SECRET } = process.env

export const signin = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username : username })
    const passwordValid = await bcrypt.compare(password, user.password)

    if (!passwordValid) {
      res.status(401).json({
        error: 'Incorrect Password'
      })
    }

    const accessToken = jwt.sign(
      { username: username },
      ACCESS_TOKEN_SECRET,
      { expiresIn: '2d'}
    )

    res.cookie('jwt', accessToken)

    res.json({
      accessToken: accessToken
    })

  } catch (error) {
    console.error(error)
  }
}

export const signup = async (req, res) => {
  try {
    const userData = req.body
    userData.password = await bcrypt.hash(userData.password, 8)
    const user = await User.create(userData)

    if (!user) {
      res.status(400).json({
        error: 'User was not able to be created'
      })
    }

    res.json({
      message: `User ${user.username} was successfully created`
    })

  } catch (error) {
    console.error(error)
  }
}
