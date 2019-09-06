'use strict'

const store = require('./../store')

const signUpSuccess = () => {
  $('#message').text('Signed up successfully!')
}

const signUpFailure = () => {
  $('#message').text('Sign up failed')
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully!')
}

const signInFailure = () => {
  $('#message').text('Sign in failed')
}

const changePasswordSuccess = () => {
  $('#message').text('Changed password successfully')
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
