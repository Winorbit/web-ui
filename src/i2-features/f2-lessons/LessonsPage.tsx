import React from 'react'
import PageWithNavbar from '../../i1-main/m1-ui/u6-navbar/PageWithNavbar'
import Lesson from './lesson/Lesson'
import s from './Lessons.module.css'

const LessonsPage = () => {
    const content = [1, 2, 3, 4].map(l => (<Lesson key={l}/>))

    return (
        <PageWithNavbar>
            <div className={s.main}>
                {content}
            </div>
        </PageWithNavbar>
    )
}

export default LessonsPage
