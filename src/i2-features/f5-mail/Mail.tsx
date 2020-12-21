import React, {ChangeEvent, useState} from 'react'
import s from './Mail.module.css'
import mail from '../../assets/mail2.png'
import OrbitInput from '../../i0-common/c2-orbitInput/OrbitInput'
import OrbitButton from '../../i0-common/c3-orbitButton/OrbitButton'

type LoginPropsType = {}

const Mail: React.FC<LoginPropsType> = () => {
    const [email, setEmail] = useState<string>('me@gmail.com')

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        // setStatus('default')
    }

    const sendCallback = () => {
    }

    return (
        <div className={s.mail}>
            <div className={s.logo}>
                <div className={s.loading}>
                    <img src={mail} alt={'mail'} className={s.img}/>
                </div>
            </div>

            <div className={s.form}>

                <div className={s.item}>
                    <OrbitInput
                        inputType={'def'}
                        placeholder={'ваш email'}
                        value={email}
                        onChange={onChangeEmail}
                    />
                </div>
                <div className={s.item}>
                    <textarea
                        className={s.textarea}
                    />
                </div>

                <div className={`${s.item} ${s.button}`}>
                    <OrbitButton
                        onClick={sendCallback}
                    >
                        отправить
                    </OrbitButton>
                </div>
            </div>
        </div>
    )
}

export default Mail
