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

const addHandlers = () => {
  $('#create-roster').on('submit', onCreateRoster)
}

module.exports = {
  onCreateRoster,
  addHandlers
}
