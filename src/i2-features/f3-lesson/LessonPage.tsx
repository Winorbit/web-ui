import React from 'react'
import PageWithNavbar from '../../i1-main/m1-ui/u6-navbar/PageWithNavbar'
import s from './Lesson.module.css'
import {useSelector} from 'react-redux'
import {AppStoreType} from '../../i1-main/m2-bll/store'

const LessonPage = () => {
    const {lesson} = useSelector((state: AppStoreType) => state.app)

    return (
        <PageWithNavbar>
            <div className={s.main}>
                <iframe
                    src="https://www.youtube.com/embed/XP59NBDhXFA"
                    className={s.iframe}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                />

                <div className={s.textBlock}>
                    <div>
                        <div>
                            <div className={s.title}>
                                Введение в программирование {lesson}
                            </div>

                            <div className={s.description}>
                                Изучаем основы основ, самые базовые вещи о программировании и о языке Python. Учимся
                                пользоваться основным инструментарием и задаем себе базу для всего дальнейшего обучения.
                                Знакомимся с теми кирпичиками, из которых и собирается программы абсолютно любой
                                сложности.
                            </div>
                        </div>

                        <div>
                            <div className={s.title}>
                                Домашнее задание:
                            </div>

                            <div className={s.description}>
                                ссылка на дз или текст его описывающий
                            </div>
                        </div>

                        <div>
                            <div className={s.title}>
                                Полезные ссылки:
                            </div>

                            <div className={s.else}>
                                ссылки и их описание
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={s.title}>
                            Что мы изучим:
                        </div>

                        <div className={s.description}>
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
