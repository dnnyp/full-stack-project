'use strict'

const alerts = require('../alerts/alerts')

const indexRosterTemplate = require('../templates/rosters.handlebars')
const showRosterTemplate = require('../templates/roster.handlebars')

const indexRosterSuccess = data => {
  alerts.newAlert('success', 'Rosters retrieved successfully', 1500)
  const indexRosterHtml = indexRosterTemplate({ rosters: data.rows })
  $('#roster-content').html(indexRosterHtml)
}

const indexRosterFailure = () => {
  alerts.newAlert('danger', 'Retrieve rosters failed', 1500)
}

const showRosterSuccess = data => {
  alerts.newAlert('success', 'Roster retrieved successfully', 1500)
  const showRosterHtml = showRosterTemplate({ roster: data.roster })
  $('#roster-content').html(showRosterHtml)
}

const showRosterFailure = () => {
  alerts.newAlert('danger', 'Retrieve roster failed', 1500)
}

const createRosterSuccess = () => {
  alerts.newAlert('success', 'Roster created successfully', 1500)
}

const createRosterFailure = () => {
  alerts.newAlert('danger', 'Create rosters failed', 1500)
}

const updateRosterSuccess = () => {
  alerts.newAlert('success', 'Roster updated successfully', 1500)
  $('#roster-table').bootstrapTable('refresh')
}

const updateRosterFailure = () => {
  alerts.newAlert('danger', 'Update roster failed', 1500)
}

const destroyRosterSuccess = () => {
  alerts.newAlert('success', 'Roster deleted successfully', 1500)
  $('#roster-table').bootstrapTable('refresh')
}

const destroyRosterFailure = () => {
  alerts.newAlert('danger', 'Delete roster failed', 1500)
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
