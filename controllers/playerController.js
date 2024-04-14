import Player from '../models/playerModel.js'

// Get all players

export const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find({})

    if (players.length === 0) {
      return res.status(404).json({
        error: 'No players were found'
      })
    }

    res.json(players)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Get a player by Name

export const getPlayerById = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({
        error: 'Player id must be provided'
      })
    }

    const player = await Player.findById(id)

    if (!player) {
      return res.status(404).json({
        error: 'Player not found'
      })
    }

    console.log(player)
    res.json(player)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Get player by name

export const getPlayerByName = async (req, res) => {
  try {
    let { fullName } = req.params

    if (!fullName) {
      return res.status(400).json({
        error: 'Player name must be provided'
      })
    }

    fullName = fullName.replace(/_/g, ' ')
    const player = await Player.findOne({ fullName: fullName }).populate('tournamentsPlayed')

    if (!player) {
      return res.status(404).json({
        error: 'Player not found'
      })
    }

    console.log(player)
    res.json(player)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Create a new player

export const createPlayer = async (req, res) => {
  try {
    const playerData = req.body

    if (!playerData) {
      return res.status(400).json({
        error: 'Player data must be provided'
      })
    }

    const playerCreated = await Player.create(playerData)

    if (!playerCreated) {
      return res.status(404).json({
        error: 'Player not found'
      })
    }

    console.log(playerCreated)
    res.json(playerCreated)


  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Update a player by ObjectId

export const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params
    const playerData = req.body

    if (!id) {
      return res.status(400).json({
        error: 'Player ID must be provided'
      })
    }

    if (!playerData) {
      return res.status(400).json({
        error: 'Player data must be provided'
      })
    }

    const playerToUpdate = await Player.findOne({ _id : id})

    if (!playerToUpdate) {
      return res.status(404).json({
        error: 'Player not found'
      })
    }

    Object.keys(playerData).forEach(key => {
      playerToUpdate[key] = playerData[key]
    })

    await playerToUpdate.save()

    console.log(playerToUpdate)
    res.json(playerToUpdate)

  } catch (error) {
    res.status(500).json({
      error: `There was an error: ${error}`
    })
  }
}

// Delete a player by ObjectId

export const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({
        error: 'Player ID must be provided'
      })
    }

    const playerDeleted = await Player.findByIdAndDelete(id)

    if (playerDeleted.deletedCount === 0) {
      return res.status(404).json({
        error: 'Player was not able to be deleted'
      })
    }

    console.log(playerDeleted)
    res.json(playerDeleted)

  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}
