'use strict'

const store = require('./../store')

const signUpSuccess = () => {
  $('#signup-modal').modal('toggle')
  $('#signup-error').collapse('hide')
  $('#sign-up').trigger('reset')
  newAlert('success', 'Sign up success', 1500)
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
  newAlert('success', 'Signed in successfully! User is ' + store.user.email, 2000)
}

const signInFailure = () => {
  $('#signin-error').collapse('show')
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#changepw-modal').modal('toggle')
  $('#changepw-error').collapse('hide')
  $('#change-password').trigger('reset')
  newAlert('success', 'Changed password successfully', 1500)
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
  newAlert('success', 'Signed out successfully', 2000)
}

const signOutFailure = () => {
  newAlert('danger', 'Sign out failed', 1500)
}

const hideOnSignin = () => {
  $('#signup-button').addClass('d-none')
  $('#signin-button').addClass('d-none')
}

const hideOnSignout = () => {
  $('#changepw-button').addClass('d-none')
  $('#signout-button').addClass('d-none')
}

const showOnSignin = () => {
  $('#changepw-button').removeClass('d-none')
  $('#signout-button').removeClass('d-none')
}

const showOnSignout = () => {
  $('#signup-button').removeClass('d-none')
  $('#signin-button').removeClass('d-none')
}

const newAlert = (type, message, delay) => {
  $('#message-container').append(`<div class="alert alert-${type} no-select ml-2" role="alert">${message}</div>`)
  $('.alert').delay(delay).fadeOut(2000)
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
  showOnSignout,
  newAlert
}
