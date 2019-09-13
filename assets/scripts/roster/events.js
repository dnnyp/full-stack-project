'use strict'

const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./../store')
const alerts = require('../alerts/alerts')

const onIndexRoster = event => {
  event.preventDefault()

  api.indexRoster()
    .then(ui.indexRosterSuccess)
    .catch(ui.indexRosterFailure)
}

const onShowRoster = event => {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.showRoster(data)
    .then(ui.showRosterSuccess)
    .catch(ui.showRosterFailure)
}

const onCreateRoster = event => {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.createRoster(data)
    .then(ui.createRosterSuccess)
    .catch(ui.createRosterFailure)
}

const onUpdateRosterSelect = () => {
  const selection = $('#user-roster-table').bootstrapTable('getSelections')

  if (selection.length !== 0) {
    $('#rosterupdate-modal').modal('toggle')
    $('#update-roster-id').val(selection[0].id)
    $('#update-roster-name').val(selection[0].name)
    $('#update-roster-season option:contains(' + selection[0].season + ')').attr('selected', 'selected')
    $('#update-roster-size option:contains(' + selection[0].league_size + ')').attr('selected', 'selected')
    $('#update-roster-scoring option:contains(' + selection[0].scoring_format + ')').attr('selected', 'selected')
  } else {
    alerts.newAlert('danger', 'Please select a roster', 1500)
  }
}

const onUpdateRoster = event => {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.updateRoster(data)
    .then(ui.updateRosterSuccess)
    .catch(ui.updateRosterFailure)
}

const onDestroyRoster = event => {
  event.preventDefault()

  const selection = $('#user-roster-table').bootstrapTable('getSelections')

  if (selection.length === 0) {
    alerts.newAlert('danger', 'Please select a roster', 1500)
  }
  if (selection.length !== 0 && store.user !== null) {
    api.destroyRoster(selection[0].id)
      .then(ui.destroyRosterSuccess)
      .catch(ui.destroyRosterFailure)
  }
}

const addHandlers = () => {
  $('#create-roster').on('submit', onCreateRoster)
  $('#update-roster-button').click('click', onUpdateRosterSelect)
  $('#update-roster').on('submit', onUpdateRoster)
  $('#destroy-roster-button').on('click', onDestroyRoster)
}

module.exports = {
  onIndexRoster,
  onShowRoster,
  onCreateRoster,
  onUpdateRosterSelect,
  onUpdateRoster,
  onDestroyRoster,
  addHandlers
}
