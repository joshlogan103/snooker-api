import Tournament from '../models/tournamentModel.js'
import { createPerformancesFromTournament, deletePerformancesForTournament, updatePlayerParticipation, removePlayerParticipation } from '../services/tournamentServices.js'

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

// Get a Tournament by ID

export const getTournamentById = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({
        error: 'Tournament ID must be provided'
      })
    }

    const tournament = await Tournament.findById(id)

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

// Get a Tournament by Name

export const getTournamentByName = async (req, res) => {
  try {
    const { name } = req.params

    if (!name) {
      return res.status(400).json({
        error: 'Tournament name must be provided'
      })
    }

    const tournament = await Tournament.findOne({ name: name })

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
      return res.status(400).json({
        error: 'Tournament not able to be created'
      })
    }

    if (Array.isArray(tournamentCreated)) {
      tournamentCreated.map( async (tourney) => {
        const newPerformances = await createPerformancesFromTournament(tourney)
        console.log(newPerformances)

        const updatedParticipation = await updatePlayerParticipation(tourney)
        console.log(updatedParticipation)
      }) 
    } else {
      const newPerformances = await createPerformancesFromTournament(tournamentCreated)
      console.log(newPerformances)

      const updatedParticipation = await updatePlayerParticipation(tournamentCreated)
      console.log(updatedParticipation)
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
    console.log(tournamentData)

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

    const tournamentToUpdate = await Tournament.findById(id)

    if (!tournamentToUpdate) {
      return res.status(404).json({
        error: 'Tournament was not found'
      })
    }

    Object.entries(tournamentData).forEach(([key, value]) => {
      if (key === 'location' || key === 'leaderboard') {
        Object.entries(value).forEach(([childKey, childValue]) => {
          tournamentToUpdate[key][childKey] = childValue
          console.log(tournamentToUpdate[key][childKey])
        })
      } else {
        tournamentToUpdate[key] = value
      }
    })

    await tournamentToUpdate.save()

    if (tournamentData.leaderboard) {
      const deletedPerformances = await deletePerformancesForTournament(id)
      console.log(deletedPerformances)

      const newPerformances = await createPerformancesFromTournament(tournamentToUpdate) 
      console.log(newPerformances)

      const removedParticipation = await removePlayerParticipation(id)
      console.log(removedParticipation)

      const updatedParticipation = await updatePlayerParticipation(tournamentToUpdate)
      console.log(updatedParticipation)
    }

    console.log(tournamentToUpdate)
    res.json(tournamentToUpdate)

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

    const tournamentDeleted = await Tournament.findByIdAndDelete(id)

    if (tournamentDeleted.deletedCount === 0) {
      return res.status(400).json({
        error: 'Tournament was not able to be deleted'
      })
    }

    await deletePerformancesForTournament(id)
    await removePlayerParticipation(id)

    console.log(tournamentDeleted)
    res.json(tournamentDeleted)

  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}