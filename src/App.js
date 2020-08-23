import React from "react";
import MessagesList from "./MessagesList";
import NewMessageForm from "./NewMessageForm";

import database from './firebaseConfig'

const SENDER = 'Krzysztof'

const initMessages = [
	{
		text: 'Hello',
		sender: 'Mateusz',
		date: Date.now()
	}, {
		text: 'hi!',
		sender: 'Mateusz',
		date: Date.now()
	}
]

const App = () => {
	const [newMessage, setMessage] = React.useState('');
	const [messages, setMessages] = React.useState([]);

	React.useEffect(() => { //componentDidMount
		database.ref('messages').on(
			'value',
			(snapshot) => {

				const messagesFromDb = snapshot.val()

				const message = Object.entries(messagesFromDb || {})
					.map(([key, message]) => ({
						...message,
						key
					}))

				setMessages(message)
			}
		)
	}, [])

	window.setMessages = setMessages

	const sendMessageHandler = (event) => {
		event.preventDefault()

		addMessage(newMessage)
	}

	const addMessage = (newMessageText) => {
		const newMessageObject = {
			text: newMessageText,
			sender: SENDER,
			date: Date.now()
		}

		database.ref('messages').push(newMessageObject)
		setMessage('')
	}

	return (
		<div>
			<MessagesList messages={messages}/>
			<NewMessageForm
				newMessage={newMessage}
				setMessage={setMessage}
				sendMessageHandler={sendMessageHandler}
			/>
		</div>
	)
}

export default App
