import React from "react";

const NewMessageForm = (props) => {
	const {
		newMessage,
		setMessage,
		sendMessageHandler,
		...otherProps} = props

	return (
		<form onSubmit={sendMessageHandler}>
			<input
				value={newMessage}
				onChange={(event) => setMessage(event.target.value)}
			/>
			<button>SEND</button>
		</form>
	)
}

// class NewMessageForm extends React.Component {
//
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			newMessage: ''
// 		}
// 	}
//
// 	componentDidMount() {
// 	}
//
// 	componentDidUpdate(prevProps, prevState, snapshot) {
// 		console.log(this.state.newMessage)
// 	}
//
// 	render() {
//
// 		return (
// 			<input
// 				value={this.state.newMessage}
// 				onChange={(event) => this.setState({
// 					newMessage: event.target.value
// 				})}
// 			/>
// 		)
// 	}
// }

export default NewMessageForm
