//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/card.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

let sec = 0;
setInterval(() => {
	const one = Math.floor((sec / 1) % 10);
	const two = Math.floor((sec / 10) % 10);
	const three = Math.floor((sec / 100) % 10);
	const four = Math.floor((sec / 1000) % 10);
	const five = Math.floor((sec / 10000) % 10);
	const six = Math.floor((sec / 100000) % 10);
    sec++;
    ReactDOM.createRoot(document.getElementById('app')).render(<Card digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />);
}, 1000);