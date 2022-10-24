import './App.css';
import {Message} from "./components/Message";
import {ChatList} from "./components/chat-list/ChatList";
import {useEffect, useState} from "react";
import {Form} from "./components/Form";

function App() {
    const [messages, setMessages] = useState([])
    const [chats, setChats] = useState([{'id': 1,'name': 'John', 'text': 'some text'}])

    const changeMessages = (data) => {
        setMessages((prevState) => {
            if (data.name !== 0 && data.text !== null) {
                return [...prevState, {"name": data.name, "text": data.text}]
            } else return prevState
        })
    }

    useEffect(() => {
        if (messages.length !== 0) {
            setMessages(prevState => {
                    if (messages[messages.length - 1].name !== 'Robot' && messages[messages.length - 1].text !== null) {
                        return [...prevState, {"name": 'Robot', "text": 'Thanks for message'}]
                    } else return prevState
                }
            )
        }
    }, [messages])

    return (
        <div className="main">
            <ChatList chats={chats}></ChatList>
            <div className="chat-body">
                <div className="chat-field">
                    <Message messages={messages}></Message>
                </div>
                <Form changeMessages={changeMessages}></Form>
            </div>

        </div>
    );
}

export default App;
