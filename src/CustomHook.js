import "./App.css";
import React, { useState, useEffect } from "react";

const useTax = (t1, t2) => {
	const [price, setPrice] = useState(1000);
	const [tx1] = useState(t1);
	const [tx2] = useState(t2);

	const tax = () => {
		return Math.floor(price * (1.0 + tx1 / 100));
	};
	const reduced = () => {
		return Math.floor(price * (1.0 + tx2 / 100));
	};
	return [price, tax, reduced, setPrice];
};

const useCounter = () => {
	const [num, setNum] = useState(0);
	const count = () => {
		setNum(num + 1);
	};
	return [num, count];
};
const AlertMessage = (props) => {
	// const [count, plus] = useCounter();
	const [price, tax, reduced, setPrice] = useTax(10, 8);

	const getInputValue = (event) => {
		setPrice(event.target.value);
	};

	return (
		<div className="alert alert-primary h5 text-primary">
			<p className="h5">通常税率：{tax()}円</p>
			<p className="h5">軽減税率：{reduced()}円</p>
			<div className="form-group">
				<label className="form-group-label">Price:</label>
				<input
					type="number"
					value={price}
					onChange={getInputValue}
					className="form-control"
				/>
			</div>
			{/* <h4>count: {count} .</h4>
			<button onClick={plus} className="btn btn-primary">
				count up
			</button> */}
		</div>
	);
};

const CustomHook = () => {
	return (
		<div>
			<h1 className="bg-primary text-white display-4">React</h1>
			<div className="container">
				<h4 className="my-3">Hooks sample</h4>
				<AlertMessage />
			</div>
		</div>
	);
};

export default CustomHook;
