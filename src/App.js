import React from "react";
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
	fetchAdvice = async () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then((response) => {
				const { advice } = response.data.slip;
				this.setState({
					advice: advice,
				});
				console.log(advice);
			})
			.catch((error) => {
				console.log("Error", error);
			});
	};

	render() {
		return (
			<div className="App">
				<div className="App-card">
					<h1 className="App-heading">{this.state.advice}</h1>
				</div>
			</div>
		);
	}
}

export default App;
