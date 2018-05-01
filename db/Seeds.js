require('dotenv').config()
const mongoose = require('mongoose')
const { User, Event, Activity } = require('./schema')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
const groupGamePlay = new Activity({
    name: 'Group Game Play', duration: '1 hours', category: 'unstrcture event',
    imgUrl: '/Users/donovan/GA/Project-Three/gamebroad.jpg'
})
const momocon = new Event({
    name: 'Momocon', length: '30 hours', type: 'Convention',
    location: `Dulth, GA`, date: '03/13/2019',
    imgUrl: '/Users/donovan/GA/Project-Three/momoconImg.jpg',
    activity: [groupGamePlay]
})
const mary = new User({
    lastName: 'Nelson', firstName: 'Mary', favorite: 'momocon',
    imgUrl: '/Users/donovan/GA/Project-Three/cosplayImg.jpeg',
    event: [momocon]
})
User.remove()
    .then(() => console.log('old users removed'))
    .then(() => mary.save())
    .then(() => console.log('Successful Save'))
    .then(() => db.close())

