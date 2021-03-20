import React, { useState } from 'react';
import './sign-up.style.scss';

// Import Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// firebase utilization
import { auth, createUserprofileDocument } from '../../firebase/firebase.util';

const SignUp = () => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmpassword: '',
	});

	const { displayName, email, password, confirmpassword } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmpassword) {
			console.error('Password dont match');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			createUserprofileDocument(user, { displayName });

			setUserCredentials({
				displayName: '',
				email: '',
				password: '',
				confirmpassword: '',
			});
		} catch (error) {
			console.error(error);
		}
	};

	// HandleFormChange
	const handleChange = (event) => {
		const { value, name } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};
	return (
		<div className="sign-up">
			<h2 className="title">I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email Address"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmpassword"
					value={confirmpassword}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
