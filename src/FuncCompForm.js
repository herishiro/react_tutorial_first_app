import "./App.css";
import React, { useState, useEffect } from "react";
import usePersist from "./UsePersistHook";

const AlertMessage = (props) => {
	const data = props.data;
	const msg = JSON.stringify(data);

	return (
		<div className="alert alert-primary h5 text-primary">
			<h5>{msg}</h5>
			<hr />
			<table className="table h6">
				<tbody>
					<tr>
						<th>Name</th>
						<td>{data.name}</td>
					</tr>
					<tr>
						<th>Mail</th>
						<td>{data.mail}</td>
					</tr>
					<tr>
						<th>Age</th>
						<td>{data.age}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

const FuncCompForm = () => {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [age, setAge] = useState(0);
	const [mydata, setMydata] = usePersist("mydata", {
		name: "no name",
		mail: "no mail",
		age: 0,
	});
	const [form, setForm] = useState({
		name: "no name",
		mail: "no mail",
		age: 0,
	});
	const changeName = (event) => {
		setName(event.target.value);
	};
	const changeMail = (event) => {
		setMail(event.target.value);
	};
	const changeAge = (event) => {
		setAge(event.target.value);
	};
	const submitForm = (event) => {
		const data = {
			name,
			mail,
			age,
		};
		setForm(data);
		setMydata(data);
		event.preventDefault();
	};
	return (
		<div>
			<h1 className="bg-primary text-white display-4">React</h1>
			<div className="container">
				<h4 className="my-3">Hooks sample</h4>
				<AlertMessage data={mydata} setData={setForm} />
				<form onSubmit={submitForm}>
					<div className="form-group">
						<label>Name:</label>
						<input type="text" onChange={changeName} className="form-control" />
					</div>
					<div className="form-group">
						<label>Mail:</label>
						<input type="text" onChange={changeMail} className="form-control" />
					</div>
					<div className="form-group">
						<label>Age:</label>
						<input
							type="number"
							onChange={changeAge}
							className="form-control"
						/>
					</div>
					<input type="submit" value="Click" className="btn btn-primary" />
				</form>
			</div>
		</div>
	);
};

export default FuncCompForm;
