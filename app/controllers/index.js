const express = require('express')
const data = require('../data')

const app = express.Router()

app.get('/emails', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(data)
})

module.exports = app
