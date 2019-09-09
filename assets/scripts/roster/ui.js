'use strict'

const createRosterSuccess = () => {
  $('#roster-message').text('Roster created successfully!')
}

const createRosterFailure = () => {
  $('#roster-message').text('Create roster failed')
}

const updateRosterSuccess = () => {
  $('#roster-message').text('Roster updated successfully!')
}

const updateRosterFailure = () => {
  $('#roster-message').text('Update roster failed')
}

module.exports = {
  createRosterSuccess,
  createRosterFailure,
  updateRosterSuccess,
  updateRosterFailure
}
