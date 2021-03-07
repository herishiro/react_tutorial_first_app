import "./App.css";
import React, { useState, useEffect } from "react";

const AlertMessage = (props) => {
	const data = ["Hello!", "Welcome...", "Good-bye?"];
	const openAlert = () => {
		const greet = data[Math.floor(Math.random() * data.length)];
		props.setAlert(`message: ${greet}`);
	};
	return (
		<div className="alert alert-primary h5 text-primary">
			<h5>{props.alert}</h5>
			<button onClick={openAlert} className="btn btn-primary">
				Click me!
			</button>
		</div>
	);
};

const CardMessage = (props) => {
	const [count, setCount] = useState(0);
	const updateCard = () => {
		setCount(count + 1);
		props.setCard(`card counter: ${count} count.`);
	};
	return (
		<div className="card p-3 border-dark text-center">
			<h5>{props.card}</h5>
			<button onClick={updateCard} className="btn btn-secondary">
				Click me!
			</button>
		</div>
	);
};

const FuncComponent = () => {
	// const [msg, setMsg] = useState("This is Sample message!");
	// const msg = "This is Sample message!";
	const [alert, setAlert] = useState("This is alert message!");
	const [card, setCard] = useState("This is card message!");
	// const changeMsg = () => {
	// 	const res = window.prompt("type your name: ");
	// 	setMsg(`Hello, ${res}!!`); aa
	// };
	return (
		<div>
			<h1 className="bg-primary text-white display-4">React</h1>
			<div className="container">
				<h4 className="my-3">Hooks sample</h4>
				<AlertMessage alert={alert} setAlert={setAlert} />
				<CardMessage card={card} setCard={setCard} />
				<div className="text-center">
					<p>{alert}</p>
					<p>{card}</p>
				</div>
			</div>
		</div>
	);
};

export default FuncComponent;
