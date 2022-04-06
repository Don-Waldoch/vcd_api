const express = require('express')
const smarty  = express.Router()
const fetch   = require('node-fetch');

// Smarty Single Street GET
// http://localhost:3003/smarty/?street=191 Goldenhiil St Carol Stream Il 60188
// http://localhost:3003/smarty/?street=191%20Goldenhiil%20St%20Carol%20Stream%20Il%2060188

smarty.get('/', async (req, res) => {
  if (req.query.street !== undefined) {
    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }
    let url = process.env.SMARTY_URL
    let ask = `?street=${req.query.street}`
    let auth = `&auth-id=${process.env.SMARTY_ID}&auth-token=${process.env.SMARTY_TOKEN}`
    let apiCall = `${url}${ask}${auth}`
    let response = await fetch(apiCall, options);
    let address = await response.json()
    console.log(address)
    res.json(address)
  } else {
    res.status(404).send("<h1>Missing 'street' Parameter</h1>");
  }
})

// Smarty Multiple Streets POST
smarty.post('/', async (req, res) => {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(req.body)
  }
  let url = process.env.SMARTY_URL
  let auth = `?auth-id=${process.env.SMARTY_ID}&auth-token=${process.env.SMARTY_TOKEN}`
  let apiCall = `${url}${auth}`
  let response = await fetch(apiCall, options);
  let addresses = await response.json()
  res.json(addresses)
})

// 404 Page
smarty.use(function (req, res, next) {
	res.status(404).send('<h1> Page not found </h1>');
});

module.exports = smarty
