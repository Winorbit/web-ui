import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../i1-main/m1-ui/u2-main/Main'
import s from './CoursesPage.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../../../i1-main/m2-bll/store'
import {getCourses} from '../../f2-account/a2-bll/coursesReducer'

const CoursesPage = () => {
    const {courses} = useSelector((store: AppStoreType) => store.courses)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCourses())
    }, [dispatch])

    const mappedCourses = courses.map(c => (
        <div key={c.id} className={s.course}>
            <div className={s.img}/>

            <div className={s.name}>
                <div className={s.nameIn}>
                    {c.title}
                    {/*12345678901234567890*/}
                    {/*123456789012345*/}
                </div>
            </div>

            <div className={s.aboutBlock}>
                <div className={s.about}>{c.description}</div>

                <NavLink to={PATH.COURSES + '/' + c.id}>
                    <button className={s.button}>перейти к курсу</button>
                </NavLink>
            </div>
        </div>
    ))

    return (
        <div className={s.page}>
            {mappedCourses}
        </div>
    )
}

export default CoursesPage
