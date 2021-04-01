import React from 'react'
import s from './../Lessons.module.css'

type LessonPropsType = {
    data?: {}
}

const Lesson: React.FC<LessonPropsType> = ({data}) => {
    return (
        <div className={s.lesson}>
            <iframe
                src="https://www.youtube.com/embed/XP59NBDhXFA"
                className={s.iframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
            />

            <div className={s.textBlock}>
                <div className={s.title}>
                    ВВЕДЕНИЕ В ПРОГРАММИРОВАНИЕ
                </div>

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
