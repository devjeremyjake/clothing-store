import React from 'react';
import './sign-in.style.scss';

// Import Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// firebase utilization
import { auth, signInWithGoggle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	// Handle Submit
	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.error(error);
		}
		this.setState({ email: '', password: '' });
	};

	// HandleFormChange
	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with email and password</span>

				<form>
					<FormInput
						type="text"
						name="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						handleChange={this.handleChange}
						value={this.state.password}
						label="Password"
						required
					/>
					<div className="buttons">
						<CustomButton onClick={this.handleSubmit} type="submit">
							Sign In
						</CustomButton>
						<CustomButton onClick={signInWithGoggle} isGoggleSignIn>
							Sign In With Goggle
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
