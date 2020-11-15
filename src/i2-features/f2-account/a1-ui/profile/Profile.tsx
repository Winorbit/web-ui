import React from 'react'
import {UserType} from '../Account'
import s from './Profile.module.css'

type ProfilePropsType = {
    profile: UserType | undefined
}

const Profile: React.FC<ProfilePropsType> = ({profile}) => {
    const name = profile ? profile.username : 'noname'
    // const avatar = profile ? profile.profile_image : ''

    return (
        <div className={s.profile}>
            {/*<img src={avatar} alt={'avatar'}/>*/}

            <div className={s.item}>{name}</div>

            {/*<div className={s.item}>сменить пароль</div>*/}
        </div>
    )
}

export default Profile
