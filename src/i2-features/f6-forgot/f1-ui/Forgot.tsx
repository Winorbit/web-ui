import React, {ChangeEvent, useState} from 'react'
import {NavLink} from 'react-router-dom'
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
    const [login, setLogin] = useState<string>('me@gmail.com')
    const [pass, setPass] = useState<string>('y3jPqdFvNtB6Q96')
    const [show, setShow] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('')

    const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
        setStatus('')
    }
    const onChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)
        setStatus('')
    }

    const sendCallback = () => {
        // send(login, pass)
        if (login === 'me@gmail.com') setStatus('на вашу почту выслана ссылка для смены пароля!')
        else setStatus('ошибка при вводе данных!')
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
                    Восстановление пароля
                </div>

                <div className={s.item}>
                    <input
                        placeholder={'введите ваш e-mail'}
                        className={s.input}
                        value={login}
                        onChange={onChangeLogin}
                    />
                </div>
                <div className={s.statusText}>
                    {status || <br/>}
                </div>
                <div className={s.item}>
                    {/*<input*/}
                    {/*    placeholder={'введите ваш пароль'}*/}
                    {/*    className={s.input}*/}
                    {/*    type={show ? 'text' : 'password'}*/}
                    {/*    value={pass}*/}
                    {/*    onChange={onChangePass}*/}
                    {/*/>*/}
                    {/*<img*/}
                    {/*    className={show ? s.eye : s.union}*/}
                    {/*    src={show ? eye : union}*/}
                    {/*    alt={'eye'}*/}
                    {/*    onClick={() => setShow(!show)}*/}
                    {/*/>*/}
                    <br/>
                </div>

                <div className={s.item}>
                    <button
                        disabled={!login || !pass}
                        className={s.button}
                        onClick={sendCallback}
                    >
                        готово
                    </button>
                </div>

                {/*<div className={s.item}>*/}
                {/*    <div className={s.forgot}>*/}
                {/*        <NavLink to={PATH.FORGOT} className={s.forgotLink}>*/}
                {/*            забыли пороль?*/}
                {/*        </NavLink>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Forgot
