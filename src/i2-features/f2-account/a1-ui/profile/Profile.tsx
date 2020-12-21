import React from 'react'
import s from './Profile.module.css'
import {UserType} from '../Account'
import ChangePass from "./changePass/ChangePass";

type ProfilePropsType = {
    profile: UserType | undefined
}

const Profile: React.FC<ProfilePropsType> = ({profile}) => {
    // const avatar = profile ? profile.profile_image : ''
    const name = profile ? profile.username : 'no name'
    const email = profile ? profile.email : 'no email'

    return (
        <div className={s.profile}>
            {/*<img src={avatar} alt={'avatar'}/>*/}

            <div className={s.item}>{name}</div>
            <div className={s.item}>{email}</div>

            <ChangePass/>
        </div>
    )
}

export default Profile
