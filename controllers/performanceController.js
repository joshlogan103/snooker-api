import Performance from '../models/performanceModel.js'

// Get all Performances

export const getAllPerformances = async (req, res) => {
  try {
    const performances = await Performance.find({})

    if (performances.length === 0) {
      return res.status(404).json({
        error: 'No Performances were found'
      })
    }

    console.log(performances)
    res.json(performances)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Get a Performance by ObjectId

export const getPerformanceById = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({
        error: 'Performance ID must be provided'
      })
    }
    const performance = await Performance.findById(id)

    if (!performance) {
      return res.status(404).json({
        error: 'Performance not found'
      })
    }

    console.log(performance)
    res.json(performance)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Get Performances by Player ID

export const getPerformancesByPlayerId = async (req, res) => {
  try {
    const { playerId } = req.params

    if (!playerId) {
      return res.status(400).json({
        error: 'Player ID must be provided'
      })
    }

    const performance = await Performance.find({ playerId : playerId })

    if (!performance) {
      return res.status(404).json({
        error: 'Performance not found'
      })
    }

    console.log(performance)
    res.json(performance)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Get Performances by Tournament ID

export const getPerformancesByTournamentId = async (req, res) => {
  try {
    const { tournamentId } = req.params

    if (!tournamentId) {
      return res.status(400).json({
        error: 'Tournament ID must be provided'
      })
    }
    
    const performance = await Performance.find({ tournamentId : tournamentId })

    if (!performance) {
      return res.status(404).json({
        error: 'Performance not found'
      })
    }

    console.log(performance)
    res.json(performance)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Create a new Performance

export const createPerformance = async (req, res) => {
  try {
    const performanceData = req.body

    if (!performanceData) {
      return res.status(400).json({
        error: 'Performance data must be provided'
      })
    }

    const performanceCreated = await Performance.create(performanceData)

    if (!performanceCreated) {
      return res.status(404).json({
        error: 'Performance not found'
      })
    }

    console.log(performanceCreated)
    res.json(performanceCreated)


  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Update a Performance by ObjectId

export const updatePerformance = async (req, res) => {
  try {
    const { id } = req.params
    const performanceData = req.body

    if (!id) {
      return res.status(400).json({
        error: 'Performance ID must be provided'
      })
    }

    if (!performanceData) {
      return res.status(400).json({
        error: 'Performance data must be provided'
      })
    }

    const performanceToUpdate = await Performance.findOne({ _id : id})

    if (!performanceToUpdate) {
      return res.status(404).json({
        error: 'Performance was not able to be updated'
      })
    }

    Object.keys(performanceData).forEach(key => {
      performanceToUpdate[key] = performanceData[key]
    })

    await performanceToUpdate.save()

    console.log(performanceToUpdate)
    res.json(performanceToUpdate)

  } catch (error) {
    res.status(500).json({
      error: `There was an error: ${error}`
    })
  }
}

// Delete a Performance by ObjectId

export const deletePerformance = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({
        error: 'Performance ID must be provided'
      })
    }

    const performanceDeleted = await Performance.deleteOne({ _id : id})

    if (performanceDeleted.deletedCount === 0) {
      return res.status(404).json({
        error: 'Performance was not able to be deleted'
      })
    }

    console.log(performanceDeleted)
    res.json(performanceDeleted)

  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}