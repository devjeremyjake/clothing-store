import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				token: token,
				amount: priceForStripe,
			},
		})
			.then((response) => {
				alert('Payment Successful');
			})
			.catch((error) => {
				console.log('Payment error:', JSON.parse(error));
				alert('Payment Issue. Please use the provided payment card');
			});
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
			stripeKey="pk_test_51HPwMNEmhi6TWFuRfDmH6ovt7cYM6KK7z23zYkk7fQWxqacnZhvGiROm5DRsJgC3rjlIRptK5gAM0JF7whBOFbbL00V2omrEMn"
		/>
	);
};

export default StripeCheckoutButton;
