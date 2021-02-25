import React, {ChangeEvent, useState} from 'react'
import s from './Mail.module.css'
import mail from '../../assets/mail2.png'
import OrbitInput from '../../i0-common/c2-orbitInput/OrbitInput'
import OrbitButton from '../../i0-common/c3-orbitButton/OrbitButton'
import {instance} from "../../i1-main/m3-dal/instance";

type LoginPropsType = {}

const Mail: React.FC<LoginPropsType> = () => {
    const [email, setEmail] = useState<string>('me@gmail.com')
    const [message, setMessage] = useState<string>('')
    const [status, setStatus] = useState<string>('default')

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        setStatus('default')
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
        setStatus('default')
    }

    const sendCallback = async () => {
        if (status !== 'loading')
            try {
                setStatus('loading')
                await instance.post('send_email/', {email, message})
                setStatus('success')
            } catch (e) {
                setStatus(e.message)
            }
    }

    const textClass = status === 'success'
        ? ' ' + s.success
        : (status !== 'loading' && status !== 'default')
            ? ' ' + s.errorAnswer
            : ''

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
                        value={message}
                        onChange={onChangeMessage}
                        className={s.textarea + textClass}
                    />
                </div>

                <div className={`${s.item} ${s.button}`}>
                    <OrbitButton
                        onClick={sendCallback}
                        disabled={status === 'loading'}
                    >
                        отправить
                    </OrbitButton>
                </div>
            </div>
        </div>
    )
}

export default Mail
