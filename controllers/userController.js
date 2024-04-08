import User from '../models/userModel.js'

// Get all users

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})

    if (!users) {
      res.status(404).json({
        error: 'No users were found'
      })
    }

    console.log(users)
    res.json(users)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Get a user by ObjectId

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      res.status(400).json({
        error: 'User ID must be provided'
      })
    }
    const user = await User.find({_id: id})

    if (!user) {
      res.status(404).json({
        error: 'User not found'
      })
    }

    console.log(user)
    res.json(user)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Create a new user

export const createUser = async (req, res) => {
  try {
    const userData = req.body

    if (!userData) {
      res.status(400).json({
        error: 'User data must be provided'
      })
    }

    const userCreated = await User.create(userData)

    if (!userCreated) {
      res.status(404).json({
        error: 'User not found'
      })
    }

    console.log(userCreated)
    res.json(userCreated)


  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Update a user by ObjectId

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const userData = req.body

    if (!id) {
      res.status(400).json({
        error: 'User ID must be provided'
      })
    }

    if (!userData) {
      res.status(400).json({
        error: 'User data must be provided'
      })
    }

    const userToUpdate = await User.findOne({ _id : id})

    if (!userToUpdate) {
      res.status(404).json({
        error: 'User was not able to be updated'
      })
    }

    if (!userData.username) {
      userData.username = userToUpdate.username
    }

    if ()

    console.log(userUpdated)
    res.json(userUpdated)

  } catch (error) {
    res.status(500).json({
      error: `There was an error: ${error}`
    })
  }
}

// Delete a user by ObjectId

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      res.status(400).json({
        error: 'User ID must be provided'
      })
    }

  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}