// Referenced mongoose
const mongoose = require('mongoose')
const Schema = require('../db/schema')
// Refereneced host Schema
const user = mongoose.model('user', Schema.userSchema)

module.exports = user