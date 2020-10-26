const express = require('express')
const Transactions = require('../models/transactions')


const router = express.Router()

router.get('/transactions', async function (req, res) {
	let transactions = await Transactions.find({})
	res.send(transactions)
})

router.post('/transaction', function (req, res) {
	let newTransaction = new Transactions (req.body)
	newTransaction.save()
	res.send(newTransaction)
})

router.delete('/transaction/:id', async function (req, res) {
	let id = req.params.id
	Transactions.findByIdAndRemove(id, function (){
		res.send('transaction deleted')
	}) 
	
})

module.exports = router
