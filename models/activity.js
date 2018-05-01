// Referenced mongoose
const mongoose = require('mongoose')
const Schema = require('../db/schema')
// Refereneced host Schema
const activity = mongoose.model('activity', Schema.activitySchema)

module.exports = activity