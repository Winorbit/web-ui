import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../../i1-main/m1-ui/u2-main/Main'
import s from './Courses.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../i1-main/m2-bll/store";
import {getCourses} from "../../a2-bll/coursesReducer";

type CoursesPropsType = {
    courseIds: string[]
}

const Courses: React.FC<CoursesPropsType> = ({courseIds}) => {
    const {courses} = useSelector((store: AppStoreType) => store.courses)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCourses())
    }, [dispatch])

    const userCourses = courses.filter(c => courseIds.find(i => i === c.id))

    const mappedCourses = userCourses.map(c => (
        <div key={c.id}>
            <NavLink to={PATH.COURSES + '/' + c.id}>
                <button className={s.item}>{c.title}</button>
            </NavLink>
        </div>
    ))

    return (
        <div className={s.courses}>
            {mappedCourses}
        </div>
    )
}

export default Courses
