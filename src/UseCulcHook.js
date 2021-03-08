import "./App.css";
import React, { useState, useEffect } from "react";

const useCalc = (num = 0, func = (a) => a) => {
	const [msg, setMsg] = useState(null);
	const setValue = (p) => {
		const result = func(p);
		setMsg(
			<p className="h5">
				※{p}の結果は{result}です。
			</p>
		);
	};
	return [msg, setValue];
};

const total = (int) => {
	let result = 0;
	for (let index = 0; index <= int; index++) {
		result += index;
	}
	return result;
};

const tax = (int) => {
	return Math.floor(int * 1.1);
};

const PlainMessage = (props) => {
	const [msg, setValue] = useCalc();

	const getInputInt = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className="p-3 h5">
			<h5>{msg}</h5>
			<input type="number" onChange={getInputInt} className="form-control" />
		</div>
	);
};

const AlertMessage = (props) => {
	const [msg, setValue] = useCalc(0, total);
	const getInputInt = (e) => {
		setValue(e.target.value);
	};
	return (
		<div className="alert alert-primary h5 text-primary">
			<h5>{msg}</h5>
			<input
				type="number"
				onChange={getInputInt}
				min="0"
				max="10000"
				className="form-control"
			/>
		</div>
	);
};

const CardMessage = (props) => {
	const [msg, setValue] = useCalc(0, tax);
	const getInputInt = (e) => {
		setValue(e.target.value);
	};
	return (
		<div className="card border-primary h5 p-3">
			<h5>{msg}</h5>
			<input
				type="range"
				onChange={getInputInt}
				min="0"
				max="10000"
				step="100"
				className="form-control"
			/>
		</div>
	);
};

const CustomHook = () => {
	return (
		<div>
			<h1 className="bg-primary text-white display-4">React</h1>
			<div className="container">
				<h4 className="my-3">Hooks sample</h4>
				<PlainMessage />
				<AlertMessage />
				<CardMessage />
			</div>
		</div>
	);
};

export default CustomHook;
