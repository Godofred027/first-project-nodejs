const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Ok')
})

router.get('/contact', (req, res) => {
    res.send('Estas en contact')
})

module.exports = router