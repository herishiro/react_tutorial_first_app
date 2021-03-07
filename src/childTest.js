import "./App.css";

import React, { Component } from "react";

export class childTest extends Component {
	input = "";
	render() {
		return (
			<div>
				<h1 className="bg-primary text-white display-4">React</h1>
				<div className="container">
					<Message title="Children!">
						これはコンポーネント内のコンテンツです。
						マルでテキストを分割します。 ぷぷー。
					</Message>
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
	render() {
		const content = this.props.children;
		console.log(this.props.children);
		const arr = content.split("。");
		const arr2 = [];
		arr.forEach((item) => {
			if (item.trim() !== "") {
				arr2.push(item);
			}
		});
		let list = arr2.map((val, key) => {
			return (
				<li className="list-group-item" style={this.li} key={key}>
					{key + 1}. {val} .
				</li>
			);
		});
		return (
			<div>
				<h2>{this.props.title}</h2>
				<ol className="list-group">{list}</ol>
			</div>
		);
	}
}

export default childTest;
