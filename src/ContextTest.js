import "./App.css";
import React, { Component } from "react";

let data = {
	title: "React-Context",
	message: "this is sample message",
};

const theme = {
	light: {
		styles: {
			backgroundColor: "#f0f9ff",
			color: "#00f",
		},
		head: "bg-primary text-white display-4 mb-4",
		alert: "alert alert-primary my-3",
		text: "text-primary m-3",
		foot: "py-4",
	},
	dark: {
		styles: {
			backgroundColor: "#336",
			color: "#eef",
		},
		head: "bg-secondary text-white display-4 mb-4",
		alert: "alert alert-dark my-3",
		text: "text-light m-3",
		foot: "py-4",
	},
};

const ThemeContext = React.createContext(theme.light);
const SampleContext = React.createContext(data);

export class ContextTest extends Component {
	static contextType = ThemeContext;
	// newData = {
	// 	title: "新しいタイトル",
	// 	message: "これは新しいメッセージです。",
	// };
	render() {
		return (
			<div style={this.context.styles}>
				<h1 className={this.context.head}>React</h1>
				<div className="container">
					<Title value="Content page" />
					<Message value="This is Content Sample." />
					<Message value="これはテーマのサンプルです." />
					<div className={this.context.foot}></div>
				</div>
				{/* <h1 className="bg-primary text-white display-4">React</h1>
				<div className="container">
					<Title />
					<Message />
					<hr />
					<SampleContext.Provider value={this.newData}>
						<Title />
						<Message />
					</SampleContext.Provider>
					<hr />
					<Title />
					<Message />
				</div> */}
			</div>
		);
	}
}

class Title extends Component {
	// static contextType = SampleContext;
	static contextType = ThemeContext;
	render() {
		return (
			<div className={this.context.alert}>
				<h2> {this.props.value}</h2>
			</div>
			// <div className="card p-2 my-3">
			// 	<h2>{this.context.title}</h2>
			// </div>
		);
	}
}

class Message extends Component {
	// static contextType = SampleContext;
	static contextType = ThemeContext;

	render() {
		return (
			<div style={this.context.styles}>
				<p className={this.context.text}> {this.props.value}</p>
			</div>
			// <div classNames="alert alert-primary">
			// 	<p>{this.context.message}</p>
			// </div>
		);
	}
}

export default ContextTest;
