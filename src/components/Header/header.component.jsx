import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';

import './header.style.scss';

const header = ({ currentUser }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					Shop
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
				<Link className="option" to="/shop">
					Contact
				</Link>
			</div>
		</div>
	);
};

export default header;
