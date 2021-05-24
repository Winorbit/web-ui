import React, {useEffect, useState} from 'react'
import s from './PageWithNavbar.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from '../u2-main/Main'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../../m2-bll/store'
import {AppActions} from '../../m2-bll/appReducer'
import arrow from './../../../assets/arrow.svg'
import {instance} from "../../m3-dal/instance";

export type GroupType = {
    id: number
    title: string
    discord_chat_link: string
}

type PageWithNavbarPropsType = {}

const PageWithNavbar: React.FC<PageWithNavbarPropsType> = ({children}) => {
    const [isOpen, setOpen] = useState(true)
    const {data, lesson} = useSelector((store: AppStoreType) => store.app) || {}
    const [groups, setGroups] = useState<GroupType[]>([])

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(AppActions.setIsAuth(false))
    }

    useEffect(() => {
        const ids = data && data.groups ? data.groups : []
        instance.get<{ results: GroupType[] }>('groups/').then(res => {
            setGroups(
                res.data.results
                    .filter(g => !!ids.find(i => +i === g.id))
            )
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
                                <div>
                                    <div className={s.big}>Студент:</div>
                                    <div className={s.small}>{data?.username}</div>
                                    <br/>
                                    <div className={s.big}>Группы:</div>

                                    {groups.map(g => (
                                        <div className={s.group}>
                                            <div className={s.small}>{g.title}</div>
                                            <div className={s.big}>основной чат:</div>
                                            <div className={s.small}>Discord - <a
                                                className={s.discord}
                                                href={g.discord_chat_link}
                                                target={'_blank'}
                                                rel="nofollow noreferrer noopener"
                                            >ссылка</a></div>
                                        </div>
                                    ))}
                                </div>

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
