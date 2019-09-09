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

const destroyRosterSuccess = () => {
  $('#roster-message').text('Roster deleted successfully!')
}

const destroyRosterFailure = () => {
  $('#roster-message').text('Delete roster failed')
}

module.exports = {
  createRosterSuccess,
  createRosterFailure,
  updateRosterSuccess,
  updateRosterFailure,
  destroyRosterSuccess,
  destroyRosterFailure
}
