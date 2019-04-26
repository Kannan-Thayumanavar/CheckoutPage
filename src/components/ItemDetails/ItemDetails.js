import React, { Component } from 'react';
import { Button, Collapse, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
	constructor(props){
		super(props);
		this.state = {
			open: false
		};
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
						<img
							width={100}
							height={100}
							alt="thumbnail"
							src="https://target.scene7.com/is/image/Target/GUEST_276b9b2f-7b2b-4baf-94c9-34090e614d72?wid=488&hei=488&fmt=webp"
						/>
						<p className="cart-item">
							Iron Man 64 GB Pendrive
							<br/>
							<Col md={6}>
								<strong> {`$${this.props.price}`} </strong>
							</Col>
							<Col md={6}>
								Qty: 1
							</Col>
						</p>
					</div>
				</Collapse>
			</div>
		)
	}
}