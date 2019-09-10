'use strict'

const store = require('./../store')

const signUpSuccess = () => {
  $('#message').text('Signed up successfully!')
  $('#signup-modal').modal('toggle')
  $('#sign-up').trigger('reset')
}

const signUpFailure = () => {
  $('#message').text('Sign up failed')
  $('#sign-up').trigger('reset')
}

const signInSuccess = data => {
  store.user = data.user
  hideOnSignin()
  showOnSignin()
  $('#message').text('Signed in successfully!')
  $('#signin-modal').modal('toggle')
  $('#sign-in').trigger('reset')
}

const signInFailure = () => {
  $('#message').text('Sign in failed')
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#message').text('Changed password successfully')
  $('#changepw-modal').modal('toggle')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = () => {
  $('#message').text('Change password failed')
  $('#change-password').trigger('reset')
}

const signOutSuccess = () => {
  store.user = null
  hideOnSignout()
  showOnSignout()
  $('#message').text('Signed out successfully')
}

const signOutFailure = () => {
  $('#message').text('Sign out failed')
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
