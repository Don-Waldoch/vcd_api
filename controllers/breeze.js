const express = require('express')
const breeze = express.Router()

breeze.get('/', (req, res) => {
  res.send('GET /breeze stub')
})

// 404 Page
breeze.use(function (req, res, next) {
	res.status(404).send('<h1> Page not found </h1>');
});

module.exports = breeze
