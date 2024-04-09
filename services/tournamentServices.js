import Performance from "../models/performanceModel.js"

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

export const deletePerformancesForTournament = async (tourneyId) => {
  try {
    await Performance.deleteMany({ tournamentId : tourneyId })
  } catch (error) {
    console.log(error)
  }
}