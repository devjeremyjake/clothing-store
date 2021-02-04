import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishKey =
		'pk_test_51HPwMNEmhi6TWFuRfDmH6ovt7cYM6KK7z23zYkk7fQWxqacnZhvGiROm5DRsJgC3rjlIRptK5gAM0JF7whBOFbbL00V2omrEMn';
	const onToken = (token) => {
		console.log(token);
		alert('payment successful');
	};

	return (
		<StripeCheckout
			label="Pay With "
			name="Clothing Line"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishKey}
		/>
	);
};

export default StripeCheckoutButton;
