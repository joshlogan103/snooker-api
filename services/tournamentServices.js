import Performance from "../models/performanceModel.js"
import Player from "../models/playerModel.js"

// Create Performance documents when a Tournament is created or update

export const createPerformancesFromTournament = async (tourney) => {
  console.log('ready to create performance docs')

  const positions = tourney.leaderboard.positions
  const prizeMoneyBreakdown = tourney.leaderboard.prizeMoneyBreakdown

  const performancePromises = positions.map( async (playerId, index) => {
    const prizeEarned = prizeMoneyBreakdown[index]

    return Performance.create({
      playerId: playerId,
      tournamentId: tourney._id,
      position: index + 1,
      prizeEarned: prizeEarned
    })
  })

  try {
    await Promise.all(performancePromises)
    console.log(`All performance docs created for ${tourney.name}`)
  } catch (error) {
    console.log(error)
  }
}

// Delete a Performance document when a Tournament is Updated or Deleted

export const deletePerformancesForTournament = async (tourneyId) => {
  try {
    const performanceIdsArray = await Performance.find({ tournamentId : tourneyId })
    console.log(performanceIdsArray)

    if (performanceIdsArray) {
      performanceIdsArray.map( async (performance) => {
        await Performance.findByIdAndDelete(performance._id)
      })
    }

  } catch (error) {
    console.log(error)
  }
}

// Update a Player document's tournament array when a Tournament is create or update

export const updatePlayerParticipation = async (tourney) => {
  try {
    const currentPlayers = await Player.find({ _id : { $in : tourney.leaderboard.positions }})

    currentPlayers.map( async (player) => {
      player.tournamentsPlayed.push(tourney._id)
      await player.save()
    })

  } catch (error) {
    console.log(error)
  }
}

// Remove tournament ID from a Player document's tournament array when a Tournament is updated or deleted

export const removePlayerParticipation = async (tourneyId) => {
  try {
    const originalPlayers = await Player.find({ tournamentsPlayed : tourneyId})

    if (originalPlayers.length > 0) {
      originalPlayers.map( async (player) => {
        const index = player.tournamentsPlayed.indexOf(tourneyId)
        player.tournamentsPlayed.splice(index, 1)
        await player.save()
      })
    }

  } catch (error) {
    console.log(error)
  }
}