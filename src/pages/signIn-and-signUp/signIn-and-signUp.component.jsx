import React from 'react';
import './signIn-and-signUp.style.scss';

// Import Pages
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

function SignInAndSignUp() {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
}

export default SignInAndSignUp;
