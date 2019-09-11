'use strict'

const indexRosterTemplate = require('../templates/rosters.handlebars')
const showRosterTemplate = require('../templates/roster.handlebars')

const indexRosterSuccess = data => {
  $('#roster-message').text('Rosters retrieved successfully!')
  const indexRosterHtml = indexRosterTemplate({ rosters: data.rows })
  $('#roster-content').html(indexRosterHtml)
}

const indexRosterFailure = () => {
  $('#roster-message').text('Retrieve rosters failed')
}

const showRosterSuccess = data => {
  $('#roster-message').text('Roster retrieved successfully!')
  const showRosterHtml = showRosterTemplate({ roster: data.roster })
  $('#roster-content').html(showRosterHtml)
}

const showRosterFailure = () => {
  $('#roster-message').text('Retrieve roster failed')
}

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
  indexRosterSuccess,
  indexRosterFailure,
  showRosterSuccess,
  showRosterFailure,
  createRosterSuccess,
  createRosterFailure,
  updateRosterSuccess,
  updateRosterFailure,
  destroyRosterSuccess,
  destroyRosterFailure
}
