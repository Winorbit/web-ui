import React, {useState} from 'react'
import s from './PageWithNavbar.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from '../u2-main/Main'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../../m2-bll/store'
import {AppActions} from '../../m2-bll/appReducer'
import arrow from './../../../assets/arrow.svg'

type PageWithNavbarPropsType = {}

const PageWithNavbar: React.FC<PageWithNavbarPropsType> = ({children}) => {
    const [isOpen, setOpen] = useState(true)
    const {username} = useSelector((store: AppStoreType) => store.app.data) || {}

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(AppActions.setIsAuth(false))
    }

    return (
        <div className={s.main}>
            <div className={isOpen ? s.open : s.close}>
                <div className={s.navbarBlock}>
                    <div className={s.navbar}>
                        <div className={s.links}>
                            <NavLink to={PATH.LESSONS} className={s.link} activeClassName={s.active}>
                                <span>Лекции</span>
                            </NavLink>
                            <NavLink to={PATH.LESSON} className={s.link} activeClassName={s.active}>
                                <span>Страница урока</span>
                            </NavLink>
                            <NavLink to={PATH.DICTIONARY} className={s.link} activeClassName={s.active}>
                                <span>Словарь</span>
                            </NavLink>
                            <NavLink to={PATH.LINKS} className={s.link} activeClassName={s.active}>
                                <span>Полезные ссылки</span>
                            </NavLink>
                        </div>

                        <div className={s.account}>
                            <div>Студент:</div>
                            <div className={s.small}>{username}</div>
                            <div>Группа:</div>
                            <div className={s.small}>00001PONL</div>
                            <div>Чат группы:</div>
                            <div className={s.small}>Discord - <span className={s.discord}>ссылка</span></div>

                            <NavLink to={PATH.LOGIN} className={s.logout} onClick={logout}>
                                <button className={s.button}>выйти</button>
                            </NavLink>
                        </div>
                    </div>

                    <div onClick={() => setOpen(o => !o)} className={s.arrow}>
                        <img src={arrow} alt={'arrow'} className={isOpen ? '' : s.rotate}/>
                    </div>
                </div>
            </div>


            <div className={s.content}>
                {children}
            </div>
        </div>
    )
}

export default PageWithNavbar