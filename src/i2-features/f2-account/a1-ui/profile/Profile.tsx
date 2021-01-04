import React, {useState} from 'react'
import s from './Profile.module.css'
import {UserType} from '../Account'
import ChangePass from './changePass/ChangePass'
import close from './../../../../assets/close.png'
import OrbitLittleInput from "../../../../i0-common/c2-orbitInput/OrbitLittleInput";

type EditType = 'none' | 'name' | 'email'

type ProfilePropsType = {
    profile: UserType | undefined
}

const Profile: React.FC<ProfilePropsType> = ({profile}) => {
    // const avatar = profile ? profile.profile_image : ''
    const name = profile ? profile.username : 'no name'
    const email = profile ? profile.email : 'no email'
    const [edit, setEdit] = useState<EditType>('none')

    const editName = () => setEdit('name')
    const editEmail = () => setEdit('email')
    const closeEdit = () => setEdit('none')

    return (
        <div className={s.profile}>
            {/*<img src={avatar} alt={'avatar'}/>*/}

            {edit !== 'none' && (
                <div className={s.edit}>
                    <img src={close} alt={'close'} onClick={closeEdit} className={s.close}/>

                    <div className={edit === 'name' ? s.nameEdit : s.emailEdit}>
                        редактировать
                        <OrbitLittleInput
                            pass={false}
                        />
                    </div>

                </div>
            )}

            <div>
                <span className={s.change} onClick={editName}>изменить</span>
                <div className={s.item}>{name}</div>
            </div>

            <div>
                <span className={s.change} onClick={editEmail}>изменить</span>
                <div className={s.item}>{email}</div>
            </div>

            <ChangePass/>
        </div>
    )
}

export default Profile
