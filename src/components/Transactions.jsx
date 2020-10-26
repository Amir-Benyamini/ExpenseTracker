import React, { Component } from 'react';
import Transaction from './Transaction';
import './components.css';


class Transactions extends Component{
	render() {
		const transactions = this.props.transactions
		return (
			<div className='container'>
				{transactions.map(t => <Transaction key={Math.floor(Math.random()*999999).toString()} transaction={t} deleteTransaction={this.props.deleteTransaction}/>)}
			</div>
		)
	}
}
export default Transactions;