import React, {ChangeEvent, useState} from 'react'
import s from './Login.module.css'
import {StatusType} from './LoginPage'
import logoDef from './login-def.png'
import eye from './eye.png'
import union from './Union.png'
import errorImg from './error.png'
import ok from './ok.png'

type LoginPropsType = {
    status: StatusType
    error: string
    setStatus: (status: StatusType) => void
    send: (login: string, pass: string) => void
}

const Login: React.FC<LoginPropsType> = ({status, error, setStatus, send}) => {
    const [login, setLogin] = useState<string>('me@gmail.com')
    const [pass, setPass] = useState<string>('y3jPqdFvNtB6Q96')
    const [show, setShow] = useState<boolean>(false)

    const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
        setStatus('default')
    }
    const onChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)
        setStatus('default')
    }

    const sendCallback = () => send(login, pass)

    return (
        <div className={s.login}>
            <div className={s.logo + ' ' + s.default}>
                {status === 'default'
                    ? <img src={logoDef} alt={'logo'} className={s.img}/>
                    : (
                        <div className={s.loading}>
                            <img
                                src={status === 'error'
                                    ? errorImg
                                    : status === 'ok'
                                        ? ok : ''
                                }
                                alt={status === 'error'
                                    ? 'error'
                                    : status === 'ok'
                                        ? 'ok' : ''
                                }
                                className={s.status}
                            />
                        </div>
                    )
                }
            </div>

            <div className={s.form}>
                <div className={s.item}>
                    {error ? 'неверный ввод данных' : <br/>}
                </div>

                <div className={s.item}>
                    <input
                        placeholder={'введите ваш логин'}
                        className={s.input}
                        value={login}
                        onChange={onChangeLogin}
                    />
                </div>
                <div className={s.item}>
                    <input
                        placeholder={'введите ваш пароль'}
                        className={s.input}
                        type={show ? 'text' : 'password'}
                        value={pass}
                        onChange={onChangePass}
                    />
                    <img
                        className={show ? s.eye : s.union}
                        src={show ? eye : union}
                        alt={'eye'}
                        onClick={() => setShow(!show)}
                    />
                </div>

                <div className={s.item}>
                    <button
                        disabled={!login || !pass}
                        className={s.button}
                        onClick={sendCallback}
                    >
                        авторизация
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
