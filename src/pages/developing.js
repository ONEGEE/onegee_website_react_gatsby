import React from 'react'

class Developing extends React.Component {
	constructor () {
		super()
		this.state = {
			count: 0
		}
	}

	increment = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			}
		})
	}

	decrease = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			}
		})
	}

	min

	render () {
		return (
			<div>
				<p>currtent count {this.state.count}</p>
				<button onClick={this.increment}>plus</button>
				<button onClick={this.decrease}>minus</button>
			</div>
		)
	}
}

export default Developing
