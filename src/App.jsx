import './App.css';
import {Message} from "./components/Message";
import {useState} from "react";

function App() {
    const [userMessages, setUserMessage] = useState(
        [
            {id: 1, name:'Alex', text: 'some message'},
            {id: 2, name:'Ivan', text: 'some message two'}
        ]
    )


  return (
    <div>
      <Message userMessages={userMessages}></Message>
    </div>
  );
}

export default App;
