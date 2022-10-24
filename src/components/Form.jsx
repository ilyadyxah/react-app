import style from './Form.module.css'
import {useState} from "react";
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";

export const Form = ({changeMessages}) => {
    const [text, setText] = useState(null)
    const [name, setName] = useState(null)

    const changeText = (ev) => {
        setText(ev.target.value)
    }

    const changeName = (ev) => {
        setName(ev.target.value)
    }

    const sendMessage = () => {
        changeMessages({name, text}).then(() => {
            clearData()
        })
    }

    const clearData = () => {
        setText(null)
        setName(null)
    }

    return <>
            <div className={style.textForm}>
                <TextField autoFocus={true} className={style.textInput} id="outlined-basic" name='name' onChange={changeName} label="Имя" variant="outlined" />
                <TextField className={style.textInput} id="outlined-basic" name='name' onChange={changeText} label="Текст" variant="outlined" />
                <Button onClick={sendMessage} variant="contained">Отправить</Button>
            </div>
    </>
}