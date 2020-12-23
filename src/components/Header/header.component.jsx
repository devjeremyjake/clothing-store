import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';

import './header.style.scss';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					Shop
				</Link>
				<Link className="option" to="/shop">
					Contact
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						Sign Out{' '}
						<span style={{ fontSize: '12px', fontWeight: '600' }}>
							({currentUser.displayName})
						</span>
					</div>
				) : (
					<Link className="option" to="/signIn">
						Sign In
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropDown />}
		</div>
	);
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(header);
