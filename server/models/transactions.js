const mongoose = require('mongoose')
const schema = mongoose.Schema

const transactionsSchema = new schema({
	amount: { type: Number, required: true },
	vendor: { type: String, required: true },
	category: { type: String, required: true }
})

const transactions= mongoose.model("transactions", transactionsSchema)
module.exports = transactions