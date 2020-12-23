import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({
	children,
	isGoggleSignIn,
	inverted,
	...otherprops
}) => {
	return (
		<button
			className={`${inverted ? 'inverted' : ''} ${
				isGoggleSignIn ? 'goggle-sign-in' : ''
			} custom-button`}
			{...otherprops}
		>
			{children}
		</button>
	);
};

export default CustomButton;
