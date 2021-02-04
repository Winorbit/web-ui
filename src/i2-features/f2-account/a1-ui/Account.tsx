import React, {useState} from 'react'
import s from './Account.module.css'
import Profile from './profile/Profile'
import Courses from './courses/Courses'
import {useParams} from 'react-router-dom'
import Videos from './videos/Videos'

export type UserType = {
    email: string
    id: number
    is_superuser: boolean
    username: string
    profile_image: undefined
    user_courses: string[]
}

type AccountPropsType = {
    profile: UserType | undefined
}

const Account: React.FC<AccountPropsType> = ({profile}) => {
    const [item, setItem] = useState<'profile' | 'courses'>('profile')
    // const [checkedCurseId, setCheckedCourseId] = useState<string>('')
    const {course_id} = useParams()
    const [checkedCurseId, setCheckedCourseId] = useState<string>(course_id)
    console.log(checkedCurseId)

    const courseIds = profile ? profile.user_courses : []

    const checkCourses = () => {
        setItem('courses')
        setCheckedCourseId('v')
    }
    const checkProfile = () => {
        setItem('profile')
        setCheckedCourseId('')
    }

    return (
        <div className={s.account}>
            <div className={s.menu}>
                <div
                    onClick={checkProfile}
                    className={s.item + ' ' + (item === 'profile' ? s.checked : '')}
                >
                    Личные данные
                </div>
                <div
                    onClick={checkCourses}
                    className={s.item + ' ' + (item === 'courses' ? s.checked : '')}
                >
                    Ваши курсы
                </div>

            </div>

            {/*<div className={checkedCurseId ? s.checkedBlockCourse : s.checkedBlock}>*/}
            <div className={checkedCurseId ? '' : s.checkedBlock}>
                {item === 'profile'
                    ? <Profile profile={profile}/>
                    : (
                        <>
                            {/*<Courses*/}
                            {/*    courseIds={courseIds}*/}
                            {/*    checkedCurseId={checkedCurseId}*/}
                            {/*    setCheckedCourseId={setCheckedCourseId}*/}
                            {/*/>*/}

                            <Videos/>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Account
