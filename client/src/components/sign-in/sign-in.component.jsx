import React, { useState } from 'react';
import './sign-in.style.scss';

// Import Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// firebase utilization
import { auth, signInWithGoggle } from '../../firebase/firebase.util';

const SignIn = () => {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const { email, password } = userCredentials;

	// Handle Submit
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.error(error);
		}
		setCredentials({ email: '', password: '' });
	};

	// HandleFormChange
	const handleChange = (event) => {
		const { value, name } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with email and password</span>

			<form>
				<FormInput
					type="text"
					name="email"
					handleChange={handleChange}
					value={email}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					handleChange={handleChange}
					value={password}
					label="Password"
					required
				/>
				<div className="buttons">
					<CustomButton onClick={handleSubmit} type="submit">
						Sign In
					</CustomButton>
					<CustomButton onClick={signInWithGoggle} isGoggleSignIn>
						Sign In With Goggle
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
