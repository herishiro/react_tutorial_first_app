import "./App.css";
import { Component } from "react";

class StateTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: "Count start!",
			count: 0,
			counter: 0,
			flag: true,
		};
		this.addCount = this.addCount.bind(this);
		// let timer = setInterval(() => {
		// 	this.setState({
		// 		count: this.state.count + 1,
		// 		msg: `[ count: ${this.state.count} ]`,
		// 	});
		// }, 1000);
	}
	addCount(event) {
		this.setState({
			counter: this.state.counter + 1,
			msg: `*** count: ${this.state.counter} ***`,
			flag: !this.state.flag,
		});
	}
	render() {
		return (
			<div>
				<h1 className="bg-primary text-white display-4">React</h1>
				<div className="container">
					<p className="subtitle">Count number.</p>
					{/* <p className="alert alert-warning">{this.state.msg}</p>
					<p className="alert alert-dark">{this.props.msg}</p> */}
					{this.state.flag ? (
						<div className="alert alert-primary text-right">
							<p className="h5">{this.state.msg}です。</p>
						</div>
					) : (
						<div className="alert alert-warning text-left">
							<p className="h5">{this.state.msg}です。</p>
						</div>
					)}
					<div className="text-center">
						<button className="btn btn-primary" onClick={this.addCount}>
							Click
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default StateTest;
