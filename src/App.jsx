import './App.css';
import {Message} from "./components/Message";
import {useEffect, useState} from "react";
import {Form} from "./components/Form";

function App() {
    const [messages, setMessages] = useState([])

    const changeMessages = (data) => {
        setMessages((prevState) => {
            return [...prevState, {"name": data.name, "text": data.text}]
        })
    }

    useEffect(() => {
        if (messages.length !== 0) {
            setMessages(prevState => {
                    if (messages[messages.length - 1].name !== 'Robot') {
                        return [...prevState, {"name": 'Robot', "text": 'Thanks for message'}]
                    } else return prevState
                }
            )
        }

    }, [messages])

    return (
        <div>
            <Message messages={messages}></Message>
            <Form changeMessages={changeMessages}></Form>
        </div>
    );
}

export default App;
