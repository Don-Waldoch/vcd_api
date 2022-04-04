const express = require('express')
const google = express.Router()

google.get('/', (req, res) => {
  res.send('GET /google stub')
})

// 404 Page
google.use(function (req, res, next) {
	res.status(404).send('<h1> Page not found </h1>');
});

module.exports = google
