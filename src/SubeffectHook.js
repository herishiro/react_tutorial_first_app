import "./App.css";
import React, { useState, useEffect } from "react";

const AlertMessage = (props) => {
	return <div className="alert alert-primary h5 text-primary">{props.msg}</div>;
};

const SubeffectHook = () => {
	const [val, setVal] = useState(1000);
	const [tax1, setTax1] = useState(0);
	const [tax2, setTax2] = useState(0);
	const [msg, setMsg] = useState("set a number");
	const changeVal = (event) => {
		setVal(event.target.value);
	};
	const calculateTax = () => {
		const res = (
			<div>
				<p>軽減税率（8％）：{tax1}円</p>
				<p>軽減税率（10％）：{tax2}円</p>
			</div>
		);
		setMsg(res);
	};
	useEffect(calculateTax, [tax1, tax2]);
	useEffect(() => {
		setTax1(Math.floor(val * 1.08));
	}, [val]);
	useEffect(() => {
		setTax2(Math.floor(val * 1.1));
	}, [val]);
	return (
		<div>
			<h1 className="bg-primary text-white display-4">React</h1>
			<div className="container">
				<h4 className="my-3">Hooks sample</h4>
				<AlertMessage msg={msg} />
				<div className="form-group">
					<label>Input:</label>
					<input type="number" onChange={changeVal} className="form-control" />
				</div>
				{/* <button className="btn btn-primary" onClick={calculateTax}>
					Calc
				</button> */}
			</div>
		</div>
	);
};

export default SubeffectHook;
