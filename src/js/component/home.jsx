import React from "react";
import PropTypes from "prop-types";
import Card from "./card.jsx";

// Definimos los tipos de datos esperados para las props de Card
Card.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};

// Componente Home como clase
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { sec: 0 }; // Estado inicial del contador en 0
	}

	// Inicia el contador cuando el componente se monta
	componentDidMount() {
		this.intervalId = setInterval(() => {
			this.setState((prevState) => ({ sec: prevState.sec + 1 }));
		}, 1000);
	}

	// Limpia el intervalo cuando el componente se desmonte
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	render() {
		// Calcula cada dígito en base al valor de `sec` en el estado
		const one = Math.floor((this.state.sec / 1) % 10);
		const two = Math.floor((this.state.sec / 10) % 10);
		const three = Math.floor((this.state.sec / 100) % 10);
		const four = Math.floor((this.state.sec / 1000) % 10);
		const five = Math.floor((this.state.sec / 10000) % 10);
		const six = Math.floor((this.state.sec / 100000) % 10);

		return (
			<div className="container">
				<Card
					digitOne={one}
					digitTwo={two}
					digitThree={three}
					digitFour={four}
					digitFive={five}
					digitSix={six}
				/>
			</div>
		);
	}
}

export default Home;
