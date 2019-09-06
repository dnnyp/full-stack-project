'use strict'

const createRosterSuccess = () => {
  $('#roster-message').text('Roster created successfully!')
}

const createRosterFailure = () => {
  $('#roster-message').text('Create roster failed')
}

module.exports = {
  createRosterSuccess,
  createRosterFailure
}
