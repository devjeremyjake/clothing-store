import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

function CartDropDown({ cartItems }) {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton>Go To CheckOut</CustomButton>
		</div>
	);
}

const mapStateToprops = (state) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToprops)(CartDropDown);
