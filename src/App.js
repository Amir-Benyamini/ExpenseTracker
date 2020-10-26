import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Breakdown from './components/Breakdown';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import Navbar from './components/Navbar'

const axios = require('axios')

class App extends Component {
	constructor() {
		super()
		this.state = {
			transactions: [],
			balance: 0
		}
	}
	// setDummy= () =>{
	// 	let balance = 0
	// 	const transactions = [
	// 		{ amount: 3200, vendor: "Elevation", category: "Salary" },
	// 		{ amount: -7, vendor: "Runescape", category: "Entertainment" },
	// 		{ amount: -20, vendor: "Subway", category: "Food" },
	// 		{ amount: -98, vendor: "La Baguetterie", category: "Food" }
	// 	]
	// 	transactions.forEach(t => balance += t.amount )
	// 	this.setState({
	// 		transactions,
	// 		balance
	// 	})
	// }

	handleTransactions = async (transaction) => {

		let { amount, vendor, category } = transaction
		await axios({
			url: 'http://localhost:4200/transaction',
			data: { "amount": amount, "vendor": vendor, "category": category },
			method: 'post'
		})

		this.getTransactions()


	}

	deleteTransaction = async (transaction) => {
		await axios({
			url: `http://localhost:4200/transaction/${transaction._id}`,
			method: 'delete'
		})

		this.getTransactions()
	}

	getTransactions = async () => {
		let balance = 0
		let transactions = await axios.get('http://localhost:4200/transactions')
		transactions.data.forEach(t => balance += t.amount)
		this.setState({
			transactions: transactions.data,
			balance
		})
	}
	componentDidMount() {
		this.getTransactions()
		// this.setDummy()
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Navbar balance={this.state.balance} />

					<Route path='/transactions' exact render={() => <Transactions deleteTransaction={this.deleteTransaction} transactions={this.state.transactions} />} />
					<Route path='/Breakdown' exact render={() => <Breakdown transactions={this.state.transactions} />} />
					<Route path='/operations' exact render={() => <Operations handleTransactions={this.handleTransactions} />} />

				</div>
			</Router>

		)
	}

}

export default App;
