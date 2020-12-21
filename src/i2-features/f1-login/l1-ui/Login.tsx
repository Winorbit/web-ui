import React, {ChangeEvent, useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Login.module.css'
import {PATH} from '../../../i1-main/m1-ui/u2-main/Main'
import OrbitForm, {StatusType} from '../../../i0-common/c1-orbitForm/OrbitForm'
import OrbitInput from '../../../i0-common/c2-orbitInput/OrbitInput'
import OrbitButton from '../../../i0-common/c3-orbitButton/OrbitButton'

type LoginPropsType = {
    status: StatusType
    error: string
    setStatus: (status: StatusType) => void
    send: (login: string, pass: string) => void
}

const Login: React.FC<LoginPropsType> = ({status, error, setStatus, send}) => {
    const [login, setLogin] = useState<string>('me@gmail.com')
    const [pass, setPass] = useState<string>('y3jPqdFvNtB6Q96')

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
        <OrbitForm status={status}>
            <div className={s.form}>
                <div className={s.item}>
                    {error ? 'неверный ввод данных' : <br/>}
                </div>

                <div className={s.item}>
                    <OrbitInput
                        placeholder={'введите ваш логин'}
                        value={login}
                        onChange={onChangeLogin}
                    />
                </div>
                <div className={s.item}>
                    <OrbitInput
                        inputType={'pass'}
                        placeholder={'введите ваш пароль'}
                        value={pass}
                        onChange={onChangePass}
                    />
                </div>

                <div className={`${s.item} ${s.button}`}>
                    <OrbitButton
                        disabled={!login || !pass}
                        onClick={sendCallback}
                    >
                        авторизация
                    </OrbitButton>
                </div>

                <div className={s.item}>
                    <div className={s.forgot}>
                        <NavLink to={PATH.FORGOT} className={s.forgotLink}>
                            забыли пороль?
                        </NavLink>
                    </div>
                </div>
            </div>
        </OrbitForm>
    )
}

export default Login
