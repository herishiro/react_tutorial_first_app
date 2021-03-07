import "./App.css";
import { Component } from "react";

class Rect extends Component {
	data = [];
	area = {
		width: "500px",
		height: "500px",
		border: "1px solid blue",
	};

	constructor(props) {
		super(props);
		this.state = {
			list: this.data,
		};
		this.setNewRect = this.setNewRect.bind(this);
	}

	setNewRect(e) {
		let x = e.pageX;
		let y = e.pageY;
		this.data.push({ x: x, y: y });
		console.log(this.data);
		this.setState({
			list: this.data,
		});
	}

	draw(rectData) {
		const rect = {
			position: "absolute",
			left: rectData.x - 25 + "px",
			top: rectData.y - 25 + "px",
			width: "50px",
			height: "50px",
			backgroundColor: "#66f3",
		};
		return <div style={rect}></div>;
	}

	render() {
		return (
			<div>
				<h1 className="bg-primary text-white display-4">React</h1>
				<div className="container">
					<p className="subtitle">draw rectangles.</p>
					<div style={this.area} onClick={this.setNewRect}>
						{this.data.map((rectData) => this.draw(rectData))}
					</div>
				</div>
			</div>
		);
	}

	// constructor(props) {
	// 	super(props);
	// 	this.x = props.x;
	// 	this.y = props.y;
	// 	this.width = props.w;
	// 	this.height = props.h;
	// 	this.color = props.c;
	// 	this.radius = props.r;
	// 	this.style = {
	// 		backgroundColor: this.color,
	// 		position: "absolute",
	// 		left: this.x + "px",
	// 		top: this.y + "px",
	// 		width: this.width + "px",
	// 		height: this.height + "px",
	// 		borderRadius: this.radius + "px",
	// 	};
	// }
	// render() {
	// 	return <div style={this.style}></div>;
	// }
}

export default Rect;
