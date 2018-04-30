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
    firstName: String,
    favorite: String,
    imgUrl: {type: String, default: ""},
    event: [eventSchema]
})

const User = mongoose.model('User', UserSchema)
const Event = mongoose.model('User', eventSchema)
const Activity = mongoose.model('Activity', activitySchema)

module.exports = {
    User, Event, Activity
}