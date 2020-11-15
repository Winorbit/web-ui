import React, {ReactNode, useEffect, useState} from 'react'
import s from './Course.module.css'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../../../i1-main/m2-bll/store'
import {getLessonsForCourse} from '../c2-bll/lessonsReducer'

const Course = () => {
    const {id: course_id} = useParams()
    const [lesson, setLesson] = useState<number>(0)
    // const [selectedTerm, selectTerm] = useState<string>('')

    const {lessons} = useSelector((store: AppStoreType) => store.lessons)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLessonsForCourse(course_id))
    }, [dispatch, course_id])

    // const course = lessons.filter(l => l.cours === course_id)
    const mappedLesson = lessons[lesson] ? lessons[lesson].content : 'error'

    // const course = getCourse(lesson_id)
    // let mappedLesson: ReactNode = 'error'
    //
    let term: ReactNode = 'none'
    //
    // if (course !== 'error' && course.lessons.length > lesson) {
    //     mappedLesson = course.lessons[lesson].content.map(c => {
    //         switch (c.type) {
    //             case 'div': {
    //                 let content = c.content.map(i => {
    //                     switch (i.type) {
    //                         case 'span': {
    //                             return <span key={i._id} style={i.style}>{i.text}&nbsp;</span>
    //                         }
    //                         case 'term': {
    //                             return (
    //                                 <span
    //                                     key={i._id}
    //                                     style={i.style}
    //                                     onClick={() => {
    //                                         const term = course.terms.find(t => t.word === i.text) || 'error'
    //
    //                                         selectTerm(term !== 'error' ? term._id : '')
    //                                     }}
    //                                 >
    //                                 {i.text}&nbsp;
    //                             </span>
    //                             )
    //                         }
    //                         default:
    //                             return null
    //                     }
    //                 })
    //
    //                 return (
    //                     <div key={c._id} style={c.style}>
    //                         {content}
    //                     </div>
    //                 )
    //             }
    //             default:
    //                 return null
    //         }
    //     })
    //
    //     const termObject = course.terms.find(t => t._id === selectedTerm) || 'error'
    //     if (termObject !== 'error') {
    //         term = (
    //             <div>
    //                 <span style={{color: 'red'}}>{termObject.word}</span> - {termObject.text}
    //             </div>
    //         )
    //     }
    // }

    const setLessonMinus = () => {
        if (lesson > 0) setLesson(lesson - 1)
    }
    const setLessonPlus = () => {
        if (lessons.length > lesson + 1)
            setLesson(lesson + 1)
    }

    return (
        <div className={s.page}>
            <div className={s.lessonBlock}>
                <div className={s.lesson}>
                    {mappedLesson}
                </div>

                <div className={s.buttons}>
                    <div className={s.leftButton}>
                        <button className={s.left} onClick={setLessonMinus}>К прошлому уроку</button>
                    </div>

                    <div className={s.rightButton}>
                        <button className={s.right} onClick={setLessonPlus}>следующее занятие</button>
                    </div>
                </div>
            </div>

            <div className={s.leftBlock}>
                <div className={s.dictionary}>
                    {term}
                </div>

                <div className={s.hints}>
                    подсказки
                </div>
            </div>
        </div>
    )
}

export default Course
