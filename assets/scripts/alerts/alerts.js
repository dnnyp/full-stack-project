'use strict'

const alertTemplate = require('../templates/alert.handlebars')

const newAlert = (type, message, delay) => {
  const alertHtml = alertTemplate({ type: type, message: message })
  $('#message-container').append(alertHtml)
  $('.alert-fade').delay(delay).fadeOut(2000)
}

module.exports = {
  newAlert
}
