import Tournament from '../models/tournamentModel.js'

// Get all Tournaments

export const getAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find({})

    if (tournaments.length === 0) {
      return res.status(404).json({
        error: 'No tournaments were found'
      })
    }

    console.log(tournaments)
    res.json(tournaments)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Get a Tournament by Name

export const getTournamentByName = async (req, res) => {
  try {
    const { name } = req.params

    if (!name) {
      return res.status(400).json({
        error: 'Tournament name must be provided'
      })
    }

    const tournament = await Tournament.findOne({ name : name })

    if (!tournament) {
      return res.status(404).json({
        error: 'Tournament not found'
      })
    }

    console.log(tournament)
    res.json(tournament)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Create a new Tournament

export const createTournament = async (req, res) => {
  try {
    const tournamentData = req.body

    if (!tournamentData) {
      return res.status(400).json({
        error: 'Tournament data must be provided'
      })
    }

    const tournamentCreated = await Tournament.create(tournamentData)

    if (!tournamentCreated) {
      return res.status(404).json({
        error: 'Tournament not found'
      })
    }

    console.log(tournamentCreated)
    res.json(tournamentCreated)


  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Update a Tournament by ObjectId

export const updateTournament = async (req, res) => {
  try {
    const { id } = req.params
    const tournamentData = req.body

    if (!id) {
      return res.status(400).json({
        error: 'Tournament ID must be provided'
      })
    }

    if (!tournamentData) {
      return res.status(400).json({
        error: 'Tournament data must be provided'
      })
    }

    const tournamentToUpdate = await Tournament.findOne({ _id : id})

    if (!tournamentToUpdate) {
      return res.status(404).json({
        error: 'Tournament was not able to be updated'
      })
    }

    Object.keys(tournamentData).forEach(key => {
        tournamentToUpdate[key] = tournamentData[key]
    })

    const tournamentUpdated = await tournamentToUpdate.save()

    console.log(tournamentUpdated)
    res.json(tournamentUpdated)

  } catch (error) {
    res.status(500).json({
      error: `There was an error: ${error}`
    })
  }
}

// Delete a Tournament by ObjectId

export const deleteTournament = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({
        error: 'Tournament ID must be provided'
      })
    }

    const tournamentDeleted = await Tournament.deleteOne({ _id : id})

    if (tournamentDeleted.deletedCount === 0) {
      return res.status(404).json({
        error: 'Tournament was not able to be deleted'
      })
    }

    console.log(tournamentDeleted)
    res.json(tournamentDeleted)

  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}