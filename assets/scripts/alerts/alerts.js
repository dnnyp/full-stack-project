'use strict'

const newAlert = (type, message, delay) => {
  $('#message-container').append(`<div class="alert alert-${type} alert-fade no-select ml-2 mb-0 p-2" role="alert">${message}</div>`)
  $('.alert-fade').delay(delay).fadeOut(2000)
}

module.exports = {
  newAlert
}
