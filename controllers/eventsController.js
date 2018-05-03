const express = require('express')
const router = express.Router({ mergeParams: true })


// Index Route
router.get('/', (req, res) => {
    User.find(req.params.userId)
    .then(user => {
        res.json(user)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  module.exports = router
  