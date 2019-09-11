'use strict'

const newAlert = (type, message, delay) => {
  $('#message-container').append(`<div class="alert alert-${type} no-select ml-2" role="alert">${message}</div>`)
  $('.alert').delay(delay).fadeOut(2000)
}

module.exports = {
  newAlert
}
