'use strict'

const store = require('./../store')

const signUpSuccess = () => {
  $('#message').text('Signed up successfully!')
  $('#signup-modal').modal('toggle')
}

const signUpFailure = () => {
  $('#message').text('Sign up failed')
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully!')
  $('#signin-modal').modal('toggle')
}

const signInFailure = () => {
  $('#message').text('Sign in failed')
}

const changePasswordSuccess = () => {
  $('#message').text('Changed password successfully')
  $('#changepw-modal').modal('toggle')
}

const changePasswordFailure = () => {
  $('#message').text('Change password failed')
}

const signOutSuccess = () => {
  store.user = null
  $('#message').text('Signed out successfully')
}

const signOutFailure = () => {
  $('#message').text('Sign out failed')
}

const hideOnSignout = () => {
  $('#changepw-button').addClass('d-none')
  $('#signout-button').addClass('d-none')
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
  hideOnSignout
}
