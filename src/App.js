import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "./App.css";

class App extends React.Component {
	state = {
		advice: "",
	};

	// lifecycle method to make API request which gets called when
	// the current component gets mounted
	componentDidMount() {
		this.fetchAdvice();
	}

	// we have to call the api twice, once during loading
	// and another after key press hence we create a method
	fetchAdvice = () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then((response) => {
				const { advice } = response.data.slip;
				this.setState({
					advice: advice,
				});
			})
			.catch((error) => {
				const advice = "Either your Internet is off or the API server is down!";
				this.setState({
					advice: advice,
				});
			});
	};

	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="App">
					<div className="App-card">
						<h1 className="App-heading pb-1">{this.state.advice}</h1>
						<button
							type="button"
							className="button btn btn-md btn-outline-info mb-2"
							onClick={this.fetchAdvice}
						>
							<span>Give me advice!</span>
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
