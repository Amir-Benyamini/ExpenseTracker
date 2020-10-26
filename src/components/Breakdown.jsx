import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, withStyles } from '@material-ui/core';
import {AttachMoney} from '@material-ui/icons';

class Breakdown extends Component {


	render() {
		const transactions = this.props.transactions
		let categories = []

		transactions.forEach(t => categories.find(c => c.category === t.category) ? categories.find(c => c.category === t.category).amount += t.amount : categories.push({ category: t.category, amount: t.amount }))
		console.log(categories)
		return (
			<div className='container'>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="center">category</TableCell>
								<TableCell align="center">Amount</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{categories.map(c => (
								<TableRow style={{backgroundColor: c.amount > 0 ? '#effad3': '#f4d9c6'}} key={c.category} >
									<TableCell align="center">{c.category}</TableCell>
									<TableCell align="center">{c.amount} <AttachMoney /></TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				{/* <Paper elevation='3'>
					{categories.map(c =>
						<div>
							<Typography variant="subtitle2">category: {c.category}</Typography>
							{transactions.map(t => t.category === c.category ? <div>
								<span>amount: {t.amount}</span>
								<span>vendor: {t.vendor}</span>
							</div> : console.log('next'))}
							<Typography variant="subtitle2">Summery: {c.amount}</Typography>
						</div>)
					}

				</Paper> */}


			</div >
		)
	}
}
export default Breakdown;