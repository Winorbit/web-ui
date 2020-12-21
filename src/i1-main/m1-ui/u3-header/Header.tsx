import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import s from './Header.module.css'
import {AppStoreType} from '../../m2-bll/store'
import {PATH} from '../u2-main/Main'
import Contacts from '../u6-contacts/Contacts'
import logo from './../../../assets/logo-ordit.png'
import men from './../../../assets/men.png'
import trueMen from './../../../assets/true-men.png'

type HeaderPropsType = {
    isAuth: boolean
}

const Header: React.FC<HeaderPropsType> = ({isAuth}) => {
    const {username} = useSelector((store: AppStoreType) => store.app.data) || {}

    return (
        <div className={s.header}>
            <div className={s.start}>
                <NavLink
                    to={PATH.ACCOUNT}
                    activeClassName={s.active + ' ' + s.item}
                    className={s.link + ' ' + s.item}
                >
                    <span className={s.text}>кабинет</span>
                </NavLink>
                <NavLink
                    to={PATH.COURSES}
                    activeClassName={s.active + ' ' + s.item}
                    className={s.link + ' ' + s.item}
                >
                    <span className={s.text}>курсы</span>
                </NavLink>
                <NavLink
                    to={PATH.MAIL}
                    activeClassName={s.active + ' ' + s.item}
                    className={s.link + ' ' + s.item}
                >
                    <span className={s.text}>почта</span>
                </NavLink>
            </div>

            <div className={s.center}>
                <div className={s.text}>зимняя</div>
                <img src={logo} alt={'logo'} width={'82px'}/>
                <div className={s.text}>орбита</div>
            </div>

            <div className={s.end}>
                <div>
                    <Contacts/>
                </div>

                <div className={s.person}>
                    {!isAuth
                        ? (
                            <>
                                <div className={s.text}>вход в орбиту</div>
                                <img src={men} alt={'person'}/>
                            </>
                        ) : (
                            <>
                                <div className={s.text}>
                                    <div>добро пожаловать</div>
                                    <span>{username}</span>
                                </div>

                                <img src={trueMen} alt={'trueMen'}/>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
