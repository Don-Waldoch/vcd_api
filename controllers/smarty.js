const express = require('express')
const smarty = express.Router()

smarty.get('/', (req, res) => {
  res.send('GET /smarty stub')
})

// 404 Page
smarty.use(function (req, res, next) {
	res.status(404).send('<h1> Page not found </h1>');
});

module.exports = smarty
