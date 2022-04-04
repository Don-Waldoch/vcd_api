// Dependencies
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// Configuration
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('Connected to Mongo Database:', process.env.MONGO_URI) }
)

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the VCD API')
})

app.use('/breeze', require('./controllers/breeze.js'))
app.use('/google', require('./controllers/google.js'))
app.use('/smarty', require('./controllers/smarty.js'))

app.use(function (req, res, next) {
	res.status(404).send('<h1> Page not found </h1>');
});

// Listen
app.listen(process.env.PORT, () => {
  console.log('Connected to Server Port:', process.env.PORT);
})
