import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import s from './Header.module.css'
import {AppStoreType} from '../../m2-bll/store'
import {PATH} from '../u2-main/Main'
import newLogo from './../../../assets/new-logo.svg'
import newMen from './../../../assets/new-man.svg'

type HeaderPropsType = {}

const Header: React.FC<HeaderPropsType> = () => {
    const {username} = useSelector((store: AppStoreType) => store.app.data) || {}
    const {isAuth} = useSelector((store: AppStoreType) => store.app)

    return (
        <div className={s.header}>
            <div style={{width: 210, height: 30}}/>

            <div className={s.center}>
                <div className={s.text}>зимняя</div>
                <img src={newLogo} alt={'logo'}/>
                <div className={s.text}>орбита</div>
            </div>

            <div className={s.person}>
                {!isAuth
                    ? (
                        <>
                            <NavLink className={s.text} to={PATH.LOGIN}>авторизация</NavLink>
                            <img src={newMen} alt={'person'}/>
                        </>
                    ) : (
                        <>
                            <div className={s.text}>
                                <div>добро пожаловать</div>
                                <span>{username}</span>
                            </div>

                            <img src={newMen} alt={'trueMen'}/>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Header
