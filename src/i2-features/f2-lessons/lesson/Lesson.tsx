import React from 'react'
import s from './../Lessons.module.css'
import { NavLink } from 'react-router-dom'
import {PATH} from '../../../i1-main/m1-ui/u2-main/Main'
import {useDispatch} from 'react-redux'
import {AppActions} from '../../../i1-main/m2-bll/appReducer'

type LessonPropsType = {
    data?: number
    // data?: {}
}

const Lesson: React.FC<LessonPropsType> = ({data}) => {
    const dispatch = useDispatch()
    const click = () => dispatch(AppActions.setLesson((data || 0).toString()))

    return (
        <div className={s.lesson}>
            <iframe
                title={'les' + (data || 0)}
                src="https://www.youtube.com/embed/XP59NBDhXFA"
                className={s.iframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
            />

            <div className={s.textBlock}>
                <NavLink className={s.title} to={PATH.LESSON + '/' + data} onClick={click}>
                    ВВЕДЕНИЕ В ПРОГРАММИРОВАНИЕ {data}
                </NavLink>

                <div className={s.description}>
                    Изучаем основы основ, самые базовые вещи о программировании и о языке Python. Учимся пользоваться
                    основным инструментарием и задаем себе базу для всего дальнейшего обучения. Знакомимся с теми
                    кирпичиками, из которых и собирается программы абсолютно любой сложности.

                    <span className={s.else}> Подробнее...</span>
                </div>
            </div>
        </div>
    )
}

export default Lesson
