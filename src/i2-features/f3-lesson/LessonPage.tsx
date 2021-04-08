import React, {useEffect, useState} from 'react'
import PageWithNavbar from '../../i1-main/m1-ui/u6-navbar/PageWithNavbar'
import s from './Lesson.module.css'
import {useSelector} from 'react-redux'
import {AppStoreType} from '../../i1-main/m2-bll/store'
import {instance} from "../../i1-main/m3-dal/instance";
import {LessonType} from '../f2-lessons/LessonsPage'

const LessonPage = () => {
    const {lesson} = useSelector((state: AppStoreType) => state.app)

    const [lessonData, setLesson] = useState<LessonType>()

    useEffect(() => {
        instance.get<LessonType>('lessons/' + lesson + '/').then(res => {
            setLesson(res.data)
        })
    }, [lesson])

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
                    <div>
                        <div>
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

                        <div>
                            <div className={s.title}>
                                Домашнее задание:
                            </div>

                            <div className={s.description}>
                                ??? ссылка на дз или текст его описывающий
                            </div>
                        </div>

                        <div>
                            <div className={s.title}>
                                Полезные ссылки:
                            </div>

                            <div
                                className={s.else}
                                dangerouslySetInnerHTML={{__html: lessonData?.lesson_usefull_links || ''}}
                            >
                                {/*ссылки и их описание*/}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={s.title}>
                            Что мы изучим:
                        </div>

                        <div className={s.description}>
                            ???
                            - Разберемся с тем, что вообще такое программирование и откуда взялось.
                            - Научимся пользоваться инструментами, которые нужны для того, чтобы вы могли написать,
                            запустить и увидеть результат выполнения вашей программы.
                            - Научимся работать с базовыми элементами Python.
                        </div>
                    </div>
                </div>

                <div className={s.buttons}>
                    <button className={s.button}>прошлый урок</button>
                    <button className={s.button}>следующий урок</button>
                </div>
            </div>
        </PageWithNavbar>
    )
}

export default LessonPage
