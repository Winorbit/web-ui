import React from 'react'
import s from './OrbitForm.module.css'
import logoDef from '../../assets/login-def2.png'
import errorImg from '../../assets/error.png'
import ok from '../../assets/ok.png'

export type StatusType = 'default' | 'loading' | 'error' | 'ok'

type OrbitFormPropsType = {
    status: StatusType
}

const OrbitForm: React.FC<OrbitFormPropsType> = (
    {status, children}
) => {

    return (
        <div className={s.form}>
            <div className={status !== 'default' ? s.logo : s.default}>
                {status === 'default'
                    ? (
                        <div className={s.loading}>
                            <img
                                src={logoDef}
                                alt={'logo'}
                                className={s.img}
                            />
                        </div>
                    ) : (
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
            {children}
        </div>
    )
}

export default OrbitForm
