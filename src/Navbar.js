import React from "react";

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<a
						className="navbar-brand"
						href="https://github.com/skcshubham/advice-me"
						target="_blank"
						rel="noreferrer"
						style={{ fontFamily: "monospace", fontSize: "1.5rem" }}
					>
						Advice Me!
					</a>
					<div className="d-flex">
						<p className="m-0">API used :</p>
						<a
							href="https://api.adviceslip.com/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fas fa-robot fa-lg pl-1"></i>
						</a>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
