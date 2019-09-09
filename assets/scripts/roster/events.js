'use strict'

const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')

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

const onUpdateRoster = event => {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.updateRoster(data)
    .then(ui.updateRosterSuccess)
    .catch(ui.updateRosterFailure)
}

const onDestroyRoster = event => {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.destroyRoster(data)
    .then(ui.destroyRosterSuccess)
    .catch(ui.destroyRosterFailure)
}

const addHandlers = () => {
  $('#create-roster').on('submit', onCreateRoster)
  $('#update-roster').on('submit', onUpdateRoster)
  $('#delete-roster').on('submit', onDestroyRoster)
  $('#show-roster').on('submit', onShowRoster)
}

module.exports = {
  onShowRoster,
  onCreateRoster,
  onUpdateRoster,
  onDestroyRoster,
  addHandlers
}
