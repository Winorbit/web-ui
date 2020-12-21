import React, {ChangeEvent, useState} from 'react'
import {useParams} from 'react-router-dom'
import s from './Forgot.module.css'
import OrbitForm, {StatusType} from '../../../i0-common/c1-orbitForm/OrbitForm'
import OrbitButton from '../../../i0-common/c3-orbitButton/OrbitButton'
import OrbitInput from '../../../i0-common/c2-orbitInput/OrbitInput'

const ok1 = 'на вашу почту выслана ссылка для смены пароля!'

type ForgotPropsType = {}

const Forgot: React.FC<ForgotPropsType> = () => {
    const {token} = useParams()
    const [login, setLogin] = useState<string>(!token ? 'me@gmail.com' : 'new pass')
    const [pass, setPass] = useState<string>('new pass')
    const [status, setStatus] = useState<StatusType>('default')
    const [result, setResult] = useState<string>('')

    const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
        setResult('')
        if (pass && e.currentTarget.value === pass) setStatus('ok')
        else setStatus('default')
    }
    const onChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)
        if (login && login === e.currentTarget.value) setStatus('ok')
        else setStatus('default')
    }

    const sendCallback = () => {
        if (login === 'me@gmail.com' && !token) {
            setResult(ok1)
        } else if (!token) setResult('ошибка при вводе данных!')
        else if (pass === login && token) setStatus('ok')
        else setStatus('error')
    }

    const onMouse = () => {
        if (pass !== login && token) setStatus('error')
        // if (pass !== login && token) setStatus('ошибка при вводе данных!')
    }

    return (
        <OrbitForm status={status}>
            <div className={s.form}>
                <div className={s.item}>
                    {token && pass && pass === login
                        ? 'Пароль совпадает!'
                        : token && status === 'error'
                            ? 'Пароль не совпадает!'
                            : 'Восстановление пароля'}
                </div>

                <div className={s.item}>
                    {result === ok1 ? (
                        <div className={s.ok}>{login}</div>
                    ) : (
                        <OrbitInput
                            inputType={token ? 'pass' : 'def'}
                            placeholder={!token
                                ? 'введите ваш e-mail'
                                : 'укажите новый пароль'
                            }
                            value={login}
                            onChange={onChangeLogin}
                        />
                    )}
                </div>
                {
                    !token ? (
                        <>
                            <div className={s.statusText}>
                                {result || <br/>}
                            </div>
                            <div className={s.item}>
                                <br/>
                            </div>
                        </>
                    ) : (
                        <div className={s.item}>
                            <OrbitInput
                                inputType={'pass'}
                                placeholder={'повторите новый пароль'}
                                value={pass}
                                onChange={onChangePass}
                            />
                        </div>
                    )
                }

                <div className={s.item} onMouseEnter={onMouse}>
                    {result !== ok1 && (
                        <div className={s.button}>
                            <OrbitButton
                                disabled={!login || (token && (!pass || login !== pass))}
                                onClick={sendCallback}
                            >
                                готово
                            </OrbitButton>
                        </div>
                    )}
                </div>
            </div>
        </OrbitForm>
    )
}

export default Forgot
