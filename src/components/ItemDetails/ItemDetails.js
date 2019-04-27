import React, { Component } from 'react';
import { Button, Collapse, Row, Col } from 'react-bootstrap';
import { SSL_OP_NO_TLSv1_2 } from 'constants';

export default class ItemDetails extends Component {
	constructor(props){
		super(props);
		this.state = {
			open: false
		};
		this.testLoop = this.testLoop.bind(this);
	}

	testLoop(){
		var item = [
			{ name : "Iron Man 64 GB Pendrive",price:`$${this.props.price}`,link :"https://target.scene7.com/is/image/Target/GUEST_276b9b2f-7b2b-4baf-94c9-34090e614d72?wid=488&hei=488&fmt=webp",qty:1},
			{ name : "Iron Man 64 GB Pendrive",price:`$${this.props.price}`,link :"https://target.scene7.com/is/image/Target/GUEST_276b9b2f-7b2b-4baf-94c9-34090e614d72?wid=488&hei=488&fmt=webp",qty:1}
		];
		 
		var listItems = item.map(function(item){
			return(
				<div>
						<img
							width={100}
							height={100}
							alt="thumbnail"
							src={item.link}
						/>
						<p className="cart-item">
							{item.name}
							<br/>
							<Col md={6}>
								<strong> {item.price} </strong>
							</Col>
							<Col md={6}>
								Qty: {item.qty}
							</Col>
						</p>						
				</div>
			);
		});

		return listItems;
	}

	render() {
		return(
			<div>
				<Button className="item-details-button" variant="link" 
				        onClick={() => this.setState({open: !this.state.open})}>
					{ this.state.open === false ? `See` : `Hide` } item details
					{ this.state.open === false ? ` +` : ` -`}
				</Button>

				<Collapse in={this.state.open}>
				<div>
				{this.testLoop(this)}
					
				</div>
					
				</Collapse>
			</div>
		)
	}
}