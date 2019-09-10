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
  hideOnSignin()
  showOnSignin()
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
  hideOnSignout()
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
