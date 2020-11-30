import React, {ChangeEvent, useState} from 'react'
import {NavLink, useParams} from 'react-router-dom'
import s from './Forgot.module.css'
import {PATH} from '../../../i1-main/m1-ui/u2-main/Main'
import logoDef from './login-def.png'
import eye from './eye.png'
import union from './Union.png'
import errorImg from './error.png'
import ok from './ok.png'

type LoginPropsType = {
    // status: StatusType
    // error: string
    // setStatus: (status: StatusType) => void
    // send: (login: string, pass: string) => void
}

const Forgot: React.FC<LoginPropsType> = (
    // {status, error, setStatus, send}
) => {
    const {token} = useParams()
    const [login, setLogin] = useState<string>(!token ? 'me@gmail.com' : 'new pass')
    const [pass, setPass] = useState<string>('new pass')
    const [show, setShow] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('')

    const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
        if (pass && e.currentTarget.value === pass) setStatus('ok')
        else setStatus('')
    }
    const onChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)
        if (e.currentTarget.value && login === e.currentTarget.value) setStatus('ok')
        else setStatus('')
    }

    const sendCallback = () => {
        // send(login, pass)
        if (login === 'me@gmail.com' && !token) setStatus('на вашу почту выслана ссылка для смены пароля!')
        else if (pass === login && token) setStatus('ok')
        else setStatus('ошибка при вводе данных!')
    }

    const onMouse = () => {
        if (pass !== login && token) setStatus('ошибка при вводе данных!')
    }

    return (
        <div className={s.login}>
            <div className={s.logo + ' ' + s.default}>
                {!status
                    ? <img src={logoDef} alt={'logo'} className={s.img}/>
                    : (
                        <div className={s.loading}>
                            <img
                                src={status === 'ошибка при вводе данных!'
                                    ? errorImg
                                    : ok
                                }
                                alt={status === 'ошибка при вводе данных!'
                                    ? 'error'
                                    : 'ok'
                                }
                                className={s.status}
                            />
                        </div>
                    )
                }
            </div>

            <div className={s.form}>
                <div className={s.item}>
                    {token && pass && pass === login
                        ? 'Пароль совпадает!'
                        : token && status === 'ошибка при вводе данных!'
                            ? 'Пароль не совпадает!'
                            : 'Восстановление пароля'}
                </div>

                <div className={s.item}>
                    <input
                        placeholder={!token
                            ? 'введите ваш e-mail'
                            : 'укажите новый пароль'
                        }
                        className={s.input}
                        value={login}
                        type={(show || !token) ? 'text' : 'password'}
                        onChange={onChangeLogin}
                    />
                    {token && (
                        <img
                            className={show ? s.eye : s.union}
                            src={show ? eye : union}
                            alt={'eye'}
                            onClick={() => setShow(!show)}
                        />
                    )}
                </div>
                {
                    !token ? (
                        <>
                            <div className={s.statusText}>
                                {status || <br/>}
                            </div>
                            <div className={s.item}>
                                <br/>
                            </div>
                        </>
                    ) : (
                        <div className={s.item}>
                            <input
                                placeholder={'повторите новый пароль'}
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
                    )
                }

                <div className={s.item} onMouseEnter={onMouse}>
                    <button
                        disabled={!login || (token && (!pass || login !== pass))}
                        className={s.button}
                        onClick={sendCallback}
                    >
                        готово
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Forgot
