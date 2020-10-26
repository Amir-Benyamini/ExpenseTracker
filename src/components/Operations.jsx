import React, { Component } from 'react';
import {Button, TextField, Container, Paper} from '@material-ui/core';
import './components.css';
class Operations extends Component {
	constructor() {
		super()
		this.state = { amount: '', vendor: "", category: "" }
	}

	handleInputs = (event) => {
		const target = event.target;
		const value = target.type === 'number' ? target.valueAsNumber : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		})
	}

	resetState = () => {
		this.setState({ amount: '', vendor: "", category: "" })
	}

	handleWithrow = () => {
		const transaction = this.state
		transaction.amount = -transaction.amount
		this.props.handleTransactions(transaction)
		this.resetState()
	}

	handleDeposite = () => {
		const transaction = this.state
		this.props.handleTransactions(transaction)
		this.resetState()


	}

	render() {
		return (
			<div>
				{/* <Grid container spacing={2}>
					
				</Grid> */}
			
				<div className='container'>
				
					<Container fixed maxWidth="xs" >
					<Paper elevation='5'>
						<div>
							<TextField id="standard-basic" label="Amount" type="number" value={this.state.amount} onChange={this.handleInputs} name='amount' />
						</div>
						<div>
							<TextField id="standard-basic" label="Vendor" type="text" value={this.state.vendor} onChange={this.handleInputs} name='vendor' />
						</div>
						<div>
							<TextField id="standard-basic" label="Category" type="text" value={this.state.category} onChange={this.handleInputs} name='category' />
						</div>

						<div className='button'>
						<Button size="medium" variant="contained" color="primary" onClick={this.handleDeposite}>Deposit</Button>
						</div>
						<div className='button'>
						<Button size="medium" variant="contained" color="secondary" onClick={this.handleWithrow}>Withdraw</Button>
						</div>
						</Paper>
					</Container>
						
				</div>





			</div>
		)
	}
}
export default Operations;