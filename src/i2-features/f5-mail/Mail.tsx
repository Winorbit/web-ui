import React from 'react'
import s from './Mail.module.css'
import mail from './mail.png'

type LoginPropsType = {}

const Mail: React.FC<LoginPropsType> = () => {
    // const [login, setLogin] = useState<string>('me@gmail.com')

    // const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    //     setLogin(e.currentTarget.value)
    //     setStatus('default')
    // }

    const sendCallback = () => {
    }

    return (
        <div className={s.mail}>
            <div className={s.logo}>
                <img src={mail} alt={'mail'} className={s.img}/>
            </div>

            <div className={s.form}>

                <div className={s.item}>
                    <input
                        placeholder={'ваш email'}
                        className={s.input}
                    />
                </div>
                <div className={s.item}>
                    <textarea
                        className={s.textarea}
                    />
                </div>

                <div className={s.item}>
                    <button
                        className={s.button}
                        onClick={sendCallback}
                    >
                        отправить
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Mail
