import React, {useEffect, useState} from 'react'
import s from './PageWithNavbar.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from '../u2-main/Main'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../../m2-bll/store'
import {AppActions} from '../../m2-bll/appReducer'
import arrow from './../../../assets/arrow.svg'
import {instance} from "../../m3-dal/instance";

type PageWithNavbarPropsType = {}

const PageWithNavbar: React.FC<PageWithNavbarPropsType> = ({children}) => {
    const [isOpen, setOpen] = useState(true)
    const {data, lesson} = useSelector((store: AppStoreType) => store.app) || {}
    const [group, setGroup] = useState<{ title: string, discord_chat_link: string }>()

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(AppActions.setIsAuth(false))
    }

    useEffect(() => {
        const id = data && data.groups ? data.groups[0] : 0
        instance.get('groups/' + id + '/').then(res => {
            setGroup(res.data)
        })
    }, [data])

    return (
        <div className={s.content}>
            <div className={s.main}>
                <div className={isOpen ? s.open : s.close}>
                    <div className={s.navbarBlock}>
                        <div className={s.navbar}>
                            <div className={s.links}>
                                <NavLink to={PATH.LESSONS} className={s.link} activeClassName={s.active}>
                                    <span>Лекции</span>
                                </NavLink>

                                <NavLink to={PATH.DICTIONARY} className={s.link} activeClassName={s.active}>
                                    <span>Словарь</span>
                                </NavLink>

                                {lesson && (
                                    <NavLink to={PATH.LESSON + '/' + lesson} className={s.link}
                                             activeClassName={s.active}>
                                        <span>Страница урока</span>
                                    </NavLink>
                                )}

                                {/*<NavLink to={PATH.LINKS} className={s.link} activeClassName={s.active}>*/}
                                {/*    <span>Полезные ссылки</span>*/}
                                {/*</NavLink>*/}
                            </div>

                            <div className={s.account}>
                                <div>Студент:</div>
                                <div className={s.small}>{data?.username}</div>
                                <div>Группа:</div>
                                <div className={s.small}>{group?.title}</div>
                                <div>Чат группы:</div>
                                <div className={s.small}>Discord - <a
                                    className={s.discord}
                                    href={group?.discord_chat_link}
                                    target={'_blank'}
                                    rel="nofollow noreferrer noopener"

                                >ссылка</a></div>

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

                <div style={{width: '100%'}}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PageWithNavbar
