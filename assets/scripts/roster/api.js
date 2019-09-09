'use strict'

const config = require('./../config')
const store = require('./../store')

const indexRoster = () => {
  return $.ajax({
    url: config.apiUrl + '/rosters'
  })
}

const showRoster = data => {
  return $.ajax({
    url: config.apiUrl + '/rosters/' + data.roster.id
  })
}

const createRoster = data => {
  return $.ajax({
    url: config.apiUrl + '/rosters',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateRoster = data => {
  return $.ajax({
    url: config.apiUrl + '/rosters/' + data.roster.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroyRoster = id => {
  return $.ajax({
    url: config.apiUrl + '/rosters/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexRoster,
  showRoster,
  createRoster,
  updateRoster,
  destroyRoster
}
