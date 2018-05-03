const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../models/user.js')
const Event = require('..models/event.js')

router.get('/', (req, res) => {
    User.findById(req.body.userId)
    .then(user => {
        res.json(user)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  