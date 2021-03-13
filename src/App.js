import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "./App.css";

class App extends React.Component {
	state = {
		advice: "",
		isLoading: true,
	};

	// lifecycle method to make API request which gets called when
	// the current component gets mounted
	componentDidMount() {
		this.fetchAdvice();
	}

	// we have to call the api twice, once during loading
	// and another after key press hence we create a method
	fetchAdvice = () => {
		setTimeout(() => {
			axios
				.get("https://api.adviceslip.com/advice")
				.then((response) => {
					const { advice } = response.data.slip;
					this.setState({
						advice: advice,
						isLoading: false,
					});
				})
				.catch((error) => {
					const advice =
						"Either your Internet is off or the API server is down!";
					this.setState({
						advice: advice,
						isLoading: false,
					});
				});
		}, 3000);
		this.setState({ isLoading: true });
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
							{!this.state.isLoading && <span>Give me advice!</span>}
							{this.state.isLoading && (
								<span>
									<i className="fas fa-spinner p-1 mr-1" />
									Loading new advice from API
								</span>
							)}
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
