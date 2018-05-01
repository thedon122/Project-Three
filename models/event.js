// Referenced mongoose
const mongoose = require('mongoose')
const Schema = require('../db/schema')
// Refereneced host Schema
const event = mongoose.model('event', Schema.eventSchema)

module.exports = event