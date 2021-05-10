import React from 'react'
import s from './../Lessons.module.css'
import { NavLink } from 'react-router-dom'
import {PATH} from '../../../i1-main/m1-ui/u2-main/Main'
import {useDispatch, useSelector} from 'react-redux'
import {AppActions} from '../../../i1-main/m2-bll/appReducer'
import {LessonType} from '../LessonsPage'
import {AppStoreType} from "../../../i1-main/m2-bll/store";

type LessonPropsType = {
    data: LessonType
}

const Lesson: React.FC<LessonPropsType> = ({data}) => {
    const {lesson} = useSelector((state: AppStoreType) => state.app)
    const dispatch = useDispatch()
    const click = () => dispatch(AppActions.setLesson((data.id).toString()))
    const src = data.source_link.replace('watch?v=', 'embed/')

    return (
        <div className={s.lesson}>
            <iframe
                title={'les' + (data || 0)}
                src={src}
                // src="https://www.youtube.com/embed/XP59NBDhXFA"
                className={s.iframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
            />

            <div className={s.textBlock}>
                <NavLink
                    className={(lesson && +lesson === data.id) ? s.checked : s.title}
                    to={PATH.LESSON + '/' + data.id}
                    onClick={click}
                >
                    {/*ВВЕДЕНИЕ В ПРОГРАММИРОВАНИЕ*/}
                    {data.title}
                </NavLink>

                <div className={s.description}>
                    {/*Изучаем основы основ, самые базовые вещи о программировании и о языке Python. Учимся пользоваться*/}
                    {/*основным инструментарием и задаем себе базу для всего дальнейшего обучения. Знакомимся с теми*/}
                    {/*кирпичиками, из которых и собирается программы абсолютно любой сложности.*/}
                    {/*{data.lesson_description}*/}
                    <div dangerouslySetInnerHTML={{__html: data.lesson_description}} className={s.des}/>

                    <span className={s.else}> Подробнее...</span>
                </div>
            </div>
        </div>
    )
}

export default Lesson
