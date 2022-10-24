import style from './Message.module.css'

export const Message = ({messages}) => {
    return <>
        {messages.map((message, index) => {
            return <div key={index}>
                <h1 className={style.titleText}>{message.name}</h1>
                <p>{message.text}</p>
            </div>
        })}
    </>
}