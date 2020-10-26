import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {AppBar, Toolbar, IconButton, Typography, Drawer} from '@material-ui/core';
import {Menu, AttachMoney, CreditCard, ViewList, AccountBalance} from '@material-ui/icons';

class Navbar extends Component {
	
	constructor(){
		super()
		this.state = {open: false}
	};

	handleDrawerOpen = () => {
		this.setState({open:true})
	};

	handleDrawerClose = () => {
		this.setState({open:false})
	};
 	
	render() {

		return (
			<div>
				<AppBar position='static'>
					<Toolbar>
						<IconButton onClick={this.handleDrawerOpen} edge="start" color="inherit" aria-label="menu">
							<Menu />
						</IconButton>
						<Typography variant="h6" style={{flexGrow : 1, color: this.props.balance > 500 ? '#effad3': '#f4d9c6'}}>
							Balance: {this.props.balance}<AttachMoney />
						</Typography>
					</Toolbar>
				</AppBar>

				<Drawer
				anchor='left'
				open={this.state.open}
				onClose={this.handleDrawerClose}
				>
					<div id='navBar'>
					<Link to='/transactions'>
						<div>
						<IconButton>
						<CreditCard fontSize="large" color="primary"/>
						</IconButton>
						</div>
					</Link>
					<Link to='/operations'>
						<div>
						<IconButton>
						<AccountBalance fontSize="large" color="primary"/>
						</IconButton>
						</div>
					</Link>
					<Link to='/Breakdown'>
						<div>
						<IconButton>
						<ViewList fontSize="large" color="primary"/>
						</IconButton>
						</div>
						</Link>
					</div>
				</Drawer>
			</div>
		)
	};
}
export default Navbar;
