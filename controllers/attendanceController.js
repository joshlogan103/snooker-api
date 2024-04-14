import Attendance from '../models/attendanceModel.js'

// Get all attendances

export const getAllAttendances = async (req, res) => {
  try {
    const userId = req.user.userId
    const attendances = await Attendance.find({ user: userId})

    if (attendances.length === 0) {
      return res.status(404).json({
        error: 'No attendances were found'
      })
    }

    console.log(attendances)
    res.json(attendances)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Get a Attendance by ObjectId

export const getAttendanceById = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({
        error: 'Attendance ID must be provided'
      })
    }
    const attendance = await Attendance.findById(id)

    if (!attendance) {
      return res.status(404).json({
        error: 'Attendance not found'
      })
    }

    console.log(attendance)
    res.json(attendance)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Get attendances by User ID

export const getAttendancesByUserId = async (req, res) => {
  try {
    const { userId } = req.params

    if (!userId) {
      return res.status(400).json({
        error: 'Player ID must be provided'
      })
    }

    const attendances = await Attendance.find({ userId : userId })

    if (!attendances) {
      return res.status(404).json({
        error: 'Attendance not found'
      })
    }

    console.log(attendances)
    res.json(attendances)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Get attendances by Tournament ID

export const getAttendancesByTournamentId = async (req, res) => {
  try {
    const { tournamentId } = req.params

    if (!tournamentId) {
      return res.status(400).json({
        error: 'Tournament ID must be provided'
      })
    }
    
    const attendances = await Attendance.find({ tournamentId : tournamentId })

    if (!attendances) {
      return res.status(404).json({
        error: 'Attendance not found'
      })
    }

    console.log(attendances)
    res.json(attendances)
    
  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Create a new Attendance

export const createAttendance = async (req, res) => {
  try {
    const attendanceData = req.body

    if (!attendanceData) {
      return res.status(400).json({
        error: 'Attendance data must be provided'
      })
    }

    const attendanceCreated = await Attendance.create(AttendanceData)

    if (!attendanceCreated) {
      return res.status(404).json({
        error: 'Attendance not found'
      })
    }

    console.log(attendanceCreated)
    res.json(attendanceCreated)


  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}

// Update a Attendance by ObjectId

export const updateAttendance = async (req, res) => {
  try {
    const { id } = req.params
    const attendanceData = req.body

    if (!id) {
      return res.status(400).json({
        error: 'Attendance ID must be provided'
      })
    }

    if (!attendanceData) {
      return res.status(400).json({
        error: 'Attendance data must be provided'
      })
    }

    const attendanceToUpdate = await Attendance.findOne({ _id : id})

    if (!attendanceToUpdate) {
      return res.status(404).json({
        error: 'Attendance was not able to be updated'
      })
    }

    Object.keys(attendanceData).forEach(key => {
      attendanceToUpdate[key] = attendanceData[key]
    })

    await attendanceToUpdate.save()

    console.log(attendanceToUpdate)
    res.json(attendanceToUpdate)

  } catch (error) {
    res.status(500).json({
      error: `There was an error: ${error}`
    })
  }
}

// Delete a Attendance by ObjectId

export const deleteAttendance = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({
        error: 'Attendance ID must be provided'
      })
    }

    const attendanceDeleted = await Attendance.findByIdAndDelete(id)

    if (attendanceDeleted.deletedCount === 0) {
      return res.status(404).json({
        error: 'Attendance was not able to be deleted'
      })
    }

    console.log(attendanceDeleted)
    res.json(attendanceDeleted)

  } catch (error) {
    res.status(500).json({
      error: `There was an error ${error}`
    })
  }
}