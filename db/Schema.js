const mongoose = require('mongoose')

const Schema = mongoose.Schema
const activitySchema = new Schema({
    name: {type: String,
        required: true},
    duration: {type: String,
        required: true},
    category: String,
    imgUrl: {type: String, default: ""}
})
const eventSchema = new Schema({
    name: {type: String,
        required: true},
    length: {type: String,
        required: true},
    type: String,
    location: String,
    date: String,
    imgUrl: {type: String, default: ""},
    activity: [activitySchema]
})
const userSchema = new Schema({
    lastName: {type: String,
        required: true},
    firstName: {type: String,
        required: true},
    favorite: String,
    imgUrl: {type: String, default: ""},
    event: [eventSchema]
})

module.exports = {
    userSchema, eventSchema, activitySchema
}