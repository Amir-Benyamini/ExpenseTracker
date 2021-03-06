const express = require('express')
const bodyParser = require ('body-parser')
const api = require('./server/routes/api')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/expenseDB', {useNewUrlParser: true, useUnifiedTopology: true})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

	next()
})

app.use('/', api)



const port = 4200
app.listen(port, function(){
	console.log(`up and running at ${port}`)
})