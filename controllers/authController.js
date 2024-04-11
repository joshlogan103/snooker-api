import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import User from '../models/userModel.js'

const { ACCESS_TOKEN_SECRET } = process.env

export const login = async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({
        error: 'Username and Password must be provided'
      })
    }

    const user = await User.findOne({ username : username })

    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      })
    }

    const passwordValid = await bcrypt.compare(password, user.password)

    if (!passwordValid) {
      return res.status(401).json({
        error: 'Incorrect Password'
      })
    }

    const accessToken = jwt.sign(
      {username: username, isAdmin: user.isAdmin},
      ACCESS_TOKEN_SECRET,
      { expiresIn: '2d'}
    )

    res.cookie('jwt', accessToken)

    res.json({
      accessToken: accessToken
    })

  } catch (error) {
    res.status(500).json({
      error: `There was an error: ${error}`
    })
  }
}

export const signup = async (req, res) => {
  try {
    const userData = req.body
    const user = await User.create(userData)

    if (!user) {
      return res.status(400).json({
        error: 'User was not able to be created'
      })
    }

    res.json({
      message: `User ${user.username} was successfully created`
    })

  } catch (error) {
    res.status(500).json({
      error: `There was an error: ${error}`
    })
  }
}

export const verifyLoggedIn = async (req, res) => {
  try {
    res.json(true)
  } catch (error) {
    res.status(500).json({
      error: `There was an error: ${error}`
    })
  }
}

export const validateAdmin = async (req, res) => {
  try {
    res.json(true)
  } catch (error) {
    res.status(500).json({
      error: `There was an error: ${error}`
    })
  }
}
