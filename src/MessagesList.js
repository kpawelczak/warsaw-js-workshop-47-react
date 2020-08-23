import React from "react";
import Message from "./Message";

const MessagesList = (props) => {
	const {messages} = props

	return <div>
		{
			messages.map((message, index) => {
				return (
					<Message
						key={index}
						message={message}
					/>
				)
			})
		}
	</div>
}

export default MessagesList
