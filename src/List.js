import "./App.css";
import { Component } from "react";

class List extends Component {
	data = [
		"This is list sample",
		"これはリストのサンプルです。",
		"配列をリストに変換します",
	];
	constructor(props) {
		super(props);
		this.state = {
			list: this.data,
		};
	}

	render() {
		return (
			<div>
				<h1 className="bg-primary text-white display-4">React</h1>
				<div className="container">
					<p className="subtitle">Show list.</p>
					<ListComp title="サンプルリスト" data={this.data} />
				</div>
			</div>
		);
	}
}

class ListComp extends Component {
	number = 1;
	render() {
		const data = this.props.data;
		return (
			<div>
				<p className="h5 text-canter">{this.props.title}</p>
				<ul className="list-group">
					{data.map((item, key) => {
						return (
							<li className="list-group-item" key={key}>
								<ItemComp number={key + 1} value={item} />
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

class ItemComp extends Component {
	item = {
		fontSize: "16pt",
		color: "#00f",
		textDecoration: "underline",
		textDecorationColor: "#ddf",
	};

	num = {
		fontWeight: "bold",
		color: "red",
	};

	render() {
		return (
			<p style={this.item}>
				<span style={this.num}>[{this.props.number}]&nbsp;</span>
				{this.props.value}
			</p>
		);
	}
}

export default List;
