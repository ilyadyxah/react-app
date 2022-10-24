import style from './Form.module.css'
import {useRef, useState} from "react";
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";

export const Form = ({changeMessages}) => {
    const [text, setText] = useState(null)
    const [name, setName] = useState(null)
    const inputNameRef = useRef(null)
    const inputTextRef = useRef(null)

    const changeText = (ev) => {
        setText(ev.target.value)
    }

    const changeName = (ev) => {
        setName(ev.target.value)
    }

    const sendMessage = () => {
        changeMessages({name, text})
        clearData()
    }

    const clearData = () => {
        inputNameRef.current.value = null
        inputTextRef.current.value = null
        inputNameRef.current.focus()
    }

    return <>
            <div className={style.textForm}>
                <TextField inputRef={inputNameRef} autoFocus={true} className={style.textInput} id="outlined-basic" name='name' onChange={changeName} label="Имя" variant="outlined" />
                <TextField inputRef={inputTextRef} className={style.textInput} id="outlined-basic" name='name' onChange={changeText} label="Текст" variant="outlined" />
                <Button onClick={sendMessage} variant="contained">Отправить</Button>
            </div>
    </>
}