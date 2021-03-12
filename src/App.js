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
		const apiData = await axios.get("https://api.adviceslip.com/advice");
		console.log(apiData.data.slip.advice);
	};

	render() {
		return (
			<React.Fragment>
				<h1>Hello</h1>
			</React.Fragment>
		);
	}
}

export default App;
