const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../models/user.js')
const Event = require('../models/event.js')

// Index Route
router.get('/', (req, res) => {
    console.log("GETTING ALL EVENTS by userId:", req.params)
    User.findById(req.params.userId)
    .then(user => {
        console.log("User Found: ", user)
        res.json(user.event)
      })
      .catch((err) => {
        console.log(err)
      })
  })
// Create Route
router.post('/', (req, res) => {
  const newUser = req.body
  console.log("GETTING ALL EVENTS by userId:", newUser)
  User.create(newUser)
    .then((user) => {
      console.log('response from server')
      res.json(user.event)
    })
    .catch((err) => {
      console.log(err)
    })
})
  module.exports = router
  