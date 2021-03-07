import "./App.css";
import React, { Component } from "react";

export class FormTest extends Component {
	input = "";
	constructor(props) {
		super(props);
		this.state = {
			title: "input form",
			message: "type your name",
			max: 10,
		};
		this.getInputText = this.getInputText.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.checkFormInput = this.checkFormInput.bind(this);
	}
	getInputText(event) {
		this.input = event.target.value;
	}
	submitForm(event) {
		this.setState({
			title: "send form",
			message: `Hello, ${this.input}!!`,
		});
		event.preventDefault();
	}
	checkFormInput(event) {
		alert(
			`${event.target.value} is too long (maximum lenght: ${this.state.max})`
		);
	}
	render() {
		return (
			<div>
				<h1 className="bg-primary text-white display-4">React</h1>
				<div className="container">
					<h4>{this.state.title}</h4>
					<Message maxlength={this.state.max} onCheck={this.checkFormInput} />
					{/* <p className="card h5 p-3">{this.state.message}</p>
					<div className="alert alert-primary mt-3">
						<form onSubmit={this.submitForm}>
							<div className="form-group">
								<label>Message:</label>
								<input
									type="text"
									className="form-control"
									onChange={this.getInputText}
									required
									pattern="[A-Za-z _,.]+"
								/>
							</div>
							<input type="submit" className="btn btn-primary" value="Click" />
						</form>
					</div> */}
				</div>
			</div>
		);
	}
}

class Message extends Component {
	li = {
		fontSize: "14pt",
		fontWeight: "bold",
		color: "#090",
	};
	constructor(props) {
		super(props);
		this.validateInput = this.validateInput.bind(this);
	}
	validateInput(event) {
		if (event.target.value.length > this.props.maxlength) {
			this.props.onCheck(event);
			event.target.value = event.target.value.substr(0, this.props.maxlength);
		}
	}
	render() {
		return (
			<div className="form-group">
				<label>input:</label>
				<input
					type="text"
					className="form-control"
					onChange={this.validateInput}
				/>
			</div>
		);
	}
}

export default FormTest;
