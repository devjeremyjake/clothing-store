import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.util';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/Header/header.component';
import signInAndSignUp from './pages/signIn-and-signUp/signIn-and-signUp.component';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signIn" component={signInAndSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
