'use strict'

const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')

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

const addHandlers = () => {
  $('#create-roster').on('submit', onCreateRoster)
  $('#update-roster').on('submit', onUpdateRoster)
}

module.exports = {
  onCreateRoster,
  onUpdateRoster,
  addHandlers
}
