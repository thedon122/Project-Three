require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', err => {
  console.log(err => {
    console.log(err)
  })
})

db.on('open', () => {
  console.log('Connected to MongoDB')
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/client/build`))

const userRoutes = require('./controllers/usersController')
app.use('/api/users', userRoutes)

const eventRoutes = require('./controllers/eventsController')
app.use('/api/users/:userId/event', eventRoutes)

const activityRoutes = require('./controllers/activitiesController')
app.use('/api/users/:userId/events/:eventId/activities', activityRoutes)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})