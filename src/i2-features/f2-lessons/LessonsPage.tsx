import React, {useEffect, useState} from 'react'
import PageWithNavbar from '../../i1-main/m1-ui/u6-navbar/PageWithNavbar'
import Lesson from './lesson/Lesson'
import s from './Lessons.module.css'
import {instance} from "../../i1-main/m3-dal/instance";

export type LessonType = {
    id: number
    title: string
    source_link: string
    lesson_description: string
    lesson_usefull_links: string

}

const LessonsPage = () => {
    const [lessons, setLessons] = useState<LessonType[]>([])

    useEffect(() => {
        instance.get<{results: LessonType[]}>('lessons/').then(res => {
            setLessons([
                ...res.data.results,
                // ...res.data.results,
                // ...res.data.results,
            ])
        })
    }, [])

    const content = lessons.map(l => (<Lesson key={l.title} data={l}/>))

    return (
        <PageWithNavbar>
            <div className={s.main}>
                {content}
            </div>
        </PageWithNavbar>
    )
}

export default LessonsPage
