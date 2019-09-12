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
  hideOnSignin()
  showOnSignin()
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
  hideOnSignout()
  showOnSignout()
  alerts.newAlert('success', 'Signed out successfully', 2000)
}

const signOutFailure = () => {
  alerts.newAlert('danger', 'Sign out failed', 1500)
}

const hideOnSignin = () => {
  $('#signup-button').addClass('d-none')
  $('#signin-button').addClass('d-none')
  $('.auth-warning').addClass('d-none')
}

const hideOnSignout = () => {
  $('#changepw-button').addClass('d-none')
  $('#signout-button').addClass('d-none')
  $('#user-roster-table').bootstrapTable('filterBy', {user_id: -1})
  $('.auth-fieldset').prop('disabled', true)
}

const showOnSignin = () => {
  $('#changepw-button').removeClass('d-none')
  $('#signout-button').removeClass('d-none')
  $('#user-roster-table').bootstrapTable('filterBy', {user_id: store.user.id})
  $('.auth-fieldset').prop('disabled', false)
}

const showOnSignout = () => {
  $('#signup-button').removeClass('d-none')
  $('#signin-button').removeClass('d-none')
  $('.auth-warning').removeClass('d-none')
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
  hideOnSignin,
  hideOnSignout,
  showOnSignin,
  showOnSignout
}
