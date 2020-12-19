import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, isGoggleSignIn, ...otherprops }) => {
	return (
		<button
			className={`${isGoggleSignIn ? 'goggle-sign-in' : ''} custom-button`}
			{...otherprops}
		>
			{children}
		</button>
	);
};

export default CustomButton;
