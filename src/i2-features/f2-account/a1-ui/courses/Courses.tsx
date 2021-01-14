import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../../i1-main/m1-ui/u2-main/Main'
import s from './Courses.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../i1-main/m2-bll/store";
import {getCourses} from "../../a2-bll/coursesReducer";
import OrbitFatButton from "../../../../i0-common/c3-orbitButton/OrbitFatButton";

type CoursesPropsType = {
    courseIds: string[]
    checkedCurseId: string
    setCheckedCourseId: (id: string) => void
}

const Courses: React.FC<CoursesPropsType> = ({courseIds, checkedCurseId, setCheckedCourseId}) => {
    const {courses} = useSelector((store: AppStoreType) => store.courses)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCourses())
    }, [dispatch])

    const userCourses = courses.filter(c => courseIds.find(i => i === c.id))

    const mappedCourses = userCourses.map(c => (
        <div key={c.id} onClick={() => {
            !checkedCurseId && setCheckedCourseId(c.id)
        }}>
            <button className={s.item}>{c.title}</button>
        </div>
    ))

    const checkedCourse = courses.find(c => c.id === checkedCurseId)

    return (
        <div className={s.courses}>
            {!checkedCurseId ? (
                <>
                    {mappedCourses}
                </>
            ) : (
                <div className={s.checkedCourse}>
                    <span className={s.courseTitle}>{checkedCourse && checkedCourse.title}</span>
                    <div className={s.course}>
                        <div>
                            <div>Последний пройденный урок:</div>
                            <div>"{'хардкод'}"</div>
                            <NavLink to={PATH.COURSES + '/' + (checkedCourse && checkedCourse.id)}>
                                <OrbitFatButton blue>перейти</OrbitFatButton>
                            </NavLink>
                        </div>

                        <div>
                            <div>Прогресс:</div>
                            <div className={s.percent}>4%</div>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Courses
