const express = require('express')
const router = express.Router()
const User = require('../db/schema.js')

router.get('/', (req, res) => {
  // Index Route
  User.find()
    .then(user => {
      res.json(user)
    })
    .catch((err) => {
      console.log(err)
    })
})
// Show Route
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log(err)
    })
})
// Create Route
router.post('/', (req, res) => {
  const newUser = req.body
  User.create(newUser)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log(err)
    })
})
// Update Route
router.put('/:id', (req, res) => {
  const userId = req.params.id
  const updatedUser = req.body
  User.findByIdAndUpdate(userId, updatedUser)
  .then((user) => {
    res.json(user)
  })
  .catch ((err) => {
    console.log(err)
    res.status(500).json(err)
  })
})
// Delete Route
router.delete('/:id', (req, res) => {
  const userId = req.params.id
  User.findByIdAndRemove(userId)
  .then((user) => {
    res.json(user)
  })
  .catch ((err) => {
    console.log(err)
    res.status(500).json(err)
  })
})