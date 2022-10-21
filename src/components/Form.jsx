import style from './Form.module.css'
import {useState} from "react";

export const Form = ({changeMessages}) => {
    const [text, setText] = useState(null)
    const [name, setName] = useState(null)

    const changeText = (ev) => {
        setText(ev.target.value)
    }

    const changeName = (ev) => {
        setName(ev.target.value)
    }

    return <>
            <div>
                <input type="text" name='name' onChange={changeName}/>
                <input type="text" name='text' onChange={changeText}/>
                <button onClick={() => {changeMessages({name, text})}}>Отправить</button>
            </div>
    </>
}