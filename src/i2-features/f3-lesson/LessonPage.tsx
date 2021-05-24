import React, {useEffect, useState} from 'react'
import PageWithNavbar from '../../i1-main/m1-ui/u6-navbar/PageWithNavbar'
import s from './Lesson.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../../i1-main/m2-bll/store'
import {instance} from "../../i1-main/m3-dal/instance";
import {LessonType} from '../f2-lessons/LessonsPage'
import down from './../../assets/down.svg'
import cross from './../../assets/cross.svg'
import {NavLink, useParams} from 'react-router-dom'
import {PATH} from "../../i1-main/m1-ui/u2-main/Main";
import {AppActions} from "../../i1-main/m2-bll/appReducer";

const LessonPage = () => {
    const {lesson} = useSelector((state: AppStoreType) => state.app)
    const {id} = useParams()

    const [lessonData, setLesson] = useState<LessonType>()
    const [col1, setCol1] = useState(true)
    const [col2, setCol2] = useState(true)

    useEffect(() => {
        instance.get<LessonType>('lessons/' + id + '/')
            .then(res => {
                setLesson(res.data)
            })
            .catch(() => {
                setLesson({
                    id: 0,
                    lesson_conspect: '',
                    lesson_description: '',
                    lesson_homework: '',
                    lesson_usefull_links: '',
                    source_link: '',
                    title: '',
                })
            })
    }, [id])

    const dispatch = useDispatch()
    const click = (x: number) => dispatch(AppActions.setLesson((x).toString()))

    useEffect(() => {
        if (lessonData?.id === 0 && lessonData?.id !== +(lesson || 1)) click(id - 1)
    }, [lessonData, lesson, id])

    const src = lessonData?.source_link.replace('watch?v=', 'embed/')

    return (
        <PageWithNavbar>
            <div className={s.main}>
                <iframe
                    title={'lesson'}
                    src={src}
                    className={s.iframe}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                />

                <div className={s.textBlock}>
                    <div className={s.xxx}>
                        <div className={s.title}>
                            {/*Введение в программирование {lesson}*/}
                            {lessonData?.title}
                        </div>

                        <div
                            className={s.description}
                            dangerouslySetInnerHTML={{__html: lessonData?.lesson_description || ''}}
                        >
                            {/*Изучаем основы основ, самые базовые вещи о программировании и о языке Python. Учимся*/}
                            {/*пользоваться основным инструментарием и задаем себе базу для всего дальнейшего обучения.*/}
                            {/*Знакомимся с теми кирпичиками, из которых и собирается программы абсолютно любой*/}
                            {/*сложности.*/}
                        </div>
                    </div>

                    <div className={s.xxx}>
                        <div className={s.title}>
                            {lessonData?.id !== 0
                                ? 'Что мы изучим:'
                                : 'Этого урока пока нет'
                            }
                        </div>

                        <div
                            className={s.description}
                            dangerouslySetInnerHTML={{__html: lessonData?.lesson_conspect || ''}}
                        >
                            {/*???*/}
                            {/*- Разберемся с тем, что вообще такое программирование и откуда взялось.*/}
                            {/*- Научимся пользоваться инструментами, которые нужны для того, чтобы вы могли написать,*/}
                            {/*запустить и увидеть результат выполнения вашей программы.*/}
                            {/*- Научимся работать с базовыми элементами Python.*/}
                        </div>
                    </div>
                </div>

                <div className={col1 ? s.collapsed : s.uncollapsed}>
                    {col1 ? (
                        <img src={down} alt={'down'} className={s.click} onClick={() => setCol1(!col1)}/>
                    ) : (
                        <img src={cross} alt={'cross'} className={s.click} onClick={() => setCol1(!col1)}/>
                    )}

                    <div className={s.titleCli} onClick={() => setCol1(!col1)}>
                        Домашнее задание:
                    </div>

                    <div
                        className={!col1 ? s.description : s.hidden}
                        dangerouslySetInnerHTML={{__html: lessonData?.lesson_homework || ''}}
                    >
                        {/*??? ссылка на дз или текст его описывающий*/}
                    </div>
                </div>

                <div className={col2 ? s.collapsed : s.uncollapsed}>
                    {col2 ? (
                        <img src={down} alt={'down'} className={s.click} onClick={() => setCol2(!col2)}/>
                    ) : (
                        <img src={cross} alt={'cross'} className={s.click} onClick={() => setCol2(!col2)}/>
                    )}

                    <div className={s.titleCli} onClick={() => setCol2(!col2)}>
                        Полезные ссылки:
                    </div>

                    <div
                        className={!col2 ? s.description : s.hidden}
                        dangerouslySetInnerHTML={{__html: lessonData?.lesson_usefull_links || ''}}
                    >
                        {/*ссылки и их описание*/}
                    </div>
                </div>

                <div className={s.buttons}>
                    <NavLink to={PATH.LESSON + '/' + (+id - 1)} onClick={() => click(+id - 1)}>
                        <button className={s.button} disabled={id === '1'}>прошлый урок</button>
                    </NavLink>

                    <NavLink to={PATH.LESSON + '/' + (+id + 1)} onClick={() => click(+id + 1)}>
                        <button className={s.button} disabled={lessonData?.id === 0}>следующий урок</button>
                    </NavLink>
                </div>
            </div>
        </PageWithNavbar>
    )
}

export default LessonPage
