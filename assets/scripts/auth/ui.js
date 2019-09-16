'use strict'

const store = require('./../store')
const alerts = require('../alerts/alerts')

const signUpSuccess = () => {
  $('#signup-modal').modal('toggle')
  $('#signup-error').collapse('hide')
  $('#sign-up').trigger('reset')
  alerts.newAlert('success', 'Sign up success', 1500)
}

const signUpFailure = () => {
  $('#signup-error').collapse('show')
  $('#sign-up').trigger('reset')
}

const signInSuccess = data => {
  store.user = data.user
  onSignin()
  $('#signin-modal').modal('toggle')
  $('#signin-error').collapse('hide')
  $('#sign-in').trigger('reset')
  alerts.newAlert('success', 'Signed in successfully! User is ' + store.user.email, 2000)
}

const signInFailure = () => {
  $('#signin-error').collapse('show')
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#changepw-modal').modal('toggle')
  $('#changepw-error').collapse('hide')
  $('#change-password').trigger('reset')
  alerts.newAlert('success', 'Changed password successfully', 1500)
}

const changePasswordFailure = () => {
  $('#message').text('Change password failed')
  $('#changepw-error').collapse('show')
  $('#change-password').trigger('reset')
}

const signOutSuccess = () => {
  store.user = null
  onSignout()
  alerts.newAlert('success', 'Signed out successfully', 2000)
}

const signOutFailure = () => {
  alerts.newAlert('danger', 'Sign out failed', 1500)
}

const onSignout = () => {
  // hide signed in actions
  $('#changepw-button').addClass('d-none')
  $('#signout-button').addClass('d-none')
  // show signed out actions
  $('#signup-button').removeClass('d-none')
  $('#signin-button').removeClass('d-none')
  // show signed out warning
  $('.auth-warning').removeClass('d-none')
  // hide data in user roster table (filter by user_id -1)
  $('#user-roster-table').bootstrapTable('filterBy', {user_id: -1})
  // disable update and delete buttons
  $('#update-roster-button').prop('disabled', true)
  $('#destroy-roster-button').prop('disabled', true)
  // disable create roster form
  $('.auth-fieldset').prop('disabled', true)
  // reset forms
  $('#create-roster').trigger('reset')
  $('#update-roster').trigger('reset')
}

const onSignin = () => {
  // hide signed out actions
  $('#signup-button').addClass('d-none')
  $('#signin-button').addClass('d-none')
  // hide signed out warning
  $('.auth-warning').addClass('d-none')
  // show signed in actions
  $('#changepw-button').removeClass('d-none')
  $('#signout-button').removeClass('d-none')
  // show user data in user roster table
  $('#user-roster-table').bootstrapTable('filterBy', {user_id: store.user.id})
  // enable update and delete roster buttons
  $('#update-roster-button').prop('disabled', false)
  $('#destroy-roster-button').prop('disabled', false)
  // enable create roster form
  $('.auth-fieldset').prop('disabled', false)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onSignout,
  onSignin
}
