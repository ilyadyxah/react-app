import style from './Message.module.css'

export const Message = ({userMessages}) => {
    console.log(userMessages)
    return <>
        {userMessages.map((message) => {
            return <div>
                <h1 className={style.titleText}>{message.name}</h1>
                <p>{message.text}</p>
            </div>
        })}

    </>
}