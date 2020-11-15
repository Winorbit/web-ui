import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Footer.module.css'
import {PATH} from '../u2-main/Main'
import logo from './logo-orbit.png'
import Contacts from '../u6-contacts/Contacts'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.start}>
                <div className={s.item1}>
                    <img src={logo} alt={'logo'}/>
                    <span>зимняя орбита</span>
                </div>


                <div className={s.item}>
                    <div className={s.head}>
                        Контакты
                    </div>

                    <NavLink to={PATH.MAIL} className={s.link}>по учебной части</NavLink>
                    <NavLink to={PATH.MAIL} className={s.link}>сотрудничество</NavLink>
                </div>

                {/*<div className={s.item}>*/}
                {/*    <div>*/}
                {/*        <NavLink to={PATH.COURSES} activeClassName={s.active} className={s.link}>*/}
                {/*            <div className={s.head}>Курсы</div>*/}
                {/*        </NavLink>*/}
                {/*    </div>*/}

                {/*    <div>ПитонНео</div>*/}
                {/*</div>*/}
            </div>

            <div className={s.end}>
                <div><Contacts/></div>
            </div>
        </div>
    )
}

export default Footer
