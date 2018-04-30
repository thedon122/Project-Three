const mongoose = require('mongoose')

const Schema = mongoose.Schema
const MainActivities = new Schema({
    Name: String,
    Duration: String,
    Category: String
})
const userActivities = new Schema({
    Name: String,
    Duration: String,
    Category: String
})
const UserSchema = new Schema({
    lastName: String,
    firstName: String,
    favorite: String,
    imgUrl: String,
    activities: []
})

const Creature = mongoose.model('Creature', CreatureSchema)

module.exports = {
    Creature
}