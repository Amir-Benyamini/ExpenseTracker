import React, { Component } from 'react';
import { Paper, Container, Grid, Typography, IconButton } from '@material-ui/core';
import { AttachMoney, DeleteForever } from '@material-ui/icons';


class Transaction extends Component {

	
	deleteTransaction = () => {
		this.props.deleteTransaction(this.props.transaction)
	}
	render() {
		const transaction = this.props.transaction
		return (

			<div>
				<div>
					<Container>
						<Paper elevation='3'style={{backgroundColor: this.props.transaction.amount > 0 ? '#effad3': '#f4d9c6'}}>
							<Grid container spacing={3}>
								<Grid item xs>
									<Typography variant="subtitle2">
										<span>amount:</span>
									</Typography>
									<Typography variant="body2">
										<span>{transaction.amount} <AttachMoney fontSize="small" /></span>
									</Typography>
								</Grid>
								<Grid item xs>
									<Typography variant="subtitle2">
										<span>vendor:</span>
									</Typography>
									<Typography variant="body2">
										<span>{transaction.vendor}</span>
									</Typography>
								</Grid>
								<Grid item xs>
									<Typography variant="subtitle2">
										<span>category:</span>
									</Typography>
									<Typography variant="body2">
										<span>{transaction.category}</span>
									</Typography>
								</Grid>
								<Grid item xs>
									<IconButton variant="outlined" color="secondary" onClick={this.deleteTransaction}><DeleteForever fontSize="large"  /></IconButton>
								</Grid>

							</Grid>
						</Paper>
					</Container>
				</div>



			</div>
		)
	}
}
export default Transaction;