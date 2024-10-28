import React from "react";
import PropTypes from "prop-types";
import Card from "./card.jsx";

//Tipos de datos
Card.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};

let sec = 0;

// Componente Home
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			one: 0,
			two: 0,
			three: 0,
			four: 0,
			five: 0,
			six: 0,
		};
	}

	componentDidMount() {
		// Inicia el intervalo al montar el componente
		this.intervalId = setInterval(() => {
			const one = Math.floor((sec / 1) % 10);
			const two = Math.floor((sec / 10) % 10);
			const three = Math.floor((sec / 100) % 10);
			const four = Math.floor((sec / 1000) % 10);
			const five = Math.floor((sec / 10000) % 10);
			const six = Math.floor((sec / 100000) % 10);
			sec++; // Incrementa sec
			this.setState({ one, two, three, four, five, six }); // Actualiza el estado
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	render() {
		return (
			<div id="container" className="d-flex justify-content-center">
				<Card
					digitOne={this.state.one}
					digitTwo={this.state.two}
					digitThree={this.state.three}
					digitFour={this.state.four}
					digitFive={this.state.five}
					digitSix={this.state.six}
				/>
			</div >
		);
	}
}

export default Home;