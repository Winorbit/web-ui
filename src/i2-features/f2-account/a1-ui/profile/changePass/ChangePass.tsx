import React, {ChangeEvent, useState} from 'react'
import s from './ChangePass.module.css'
import OrbitLittleInput from '../../../../../i0-common/c2-orbitInput/OrbitLittleInput'
import OrbitFatButton from '../../../../../i0-common/c3-orbitButton/OrbitFatButton'

type ChangePassPropsType = {}

const ChangePass: React.FC<ChangePassPropsType> = ({}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [pass, setPass] = useState<string>('')
    const [pass2, setPass2] = useState<string>('')
    const [oldPassError, setOldPassError] = useState<boolean>(false)
    const [newPassEdit, setNewPassEdit] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    const edit = () => {
        setEditMode(true)
        setSuccess(false)
        setPass('')
        setPass2('')
    }
    const onChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)
        setOldPassError(false)
    }
    const onChangePass2 = (e: ChangeEvent<HTMLInputElement>) => {
        setPass2(e.currentTarget.value)
        setOldPassError(false)
    }
    const checkOldPass = () => {
        if (!newPassEdit) {
            if (pass !== '1111') {
                setPass('')
                setOldPassError(true)
            } else {
                setPass('')
                setNewPassEdit(true)
            }
        } else {
            if (pass !== pass2) setOldPassError(true)
            else {
                setEditMode(false)
                setNewPassEdit(false)
                setSuccess(true)
            }
        }
    }

    return (
        <div className={s.all}>
            {editMode
                ? !newPassEdit
                    ? (
                        <div className={s.changeBlock}>
                            <div className={s.input}>
                                <OrbitLittleInput
                                    placeholder={oldPassError ? 'пароль введён неверно' : 'введите старый пароль'}
                                    value={pass}
                                    onChange={onChangePass}
                                    circle={oldPassError ? 'red' : undefined}
                                />
                            </div>

                            <OrbitFatButton
                                disabled={!pass}
                                onClick={checkOldPass}
                            >
                                Готово
                            </OrbitFatButton>
                        </div>
                    )
                    : (
                        <div className={s.changeBlock}>
                            <div className={s.text}>
                                {oldPassError ? 'Пароли не совпадают!' : 'Введите ваш новый пароль'}
                            </div>

                            <div className={s.inputNew}>
                                <OrbitLittleInput
                                    placeholder={'новый пароль'}
                                    value={pass}
                                    onChange={onChangePass}
                                    circle={oldPassError ? 'red2' : 'white'}
                                />
                            </div>
                            <div className={s.inputNew}>
                                <OrbitLittleInput
                                    placeholder={'подтвердите новый пароль'}
                                    value={pass2}
                                    onChange={onChangePass2}
                                    circle={oldPassError ? 'red2' : 'white'}
                                />
                            </div>

                            <OrbitFatButton
                                disabled={!pass || !pass2}
                                onClick={checkOldPass}
                            >
                                Изменить
                            </OrbitFatButton>
                        </div>
                    )
                : (
                    <>
                        <div
                            className={s.item + ' ' + s.changePass}
                            onClick={edit}
                        >
                            поменять пароль
                        </div>
                        {success && (
                            <div className={s.text2}>Пароль успешно изменён!</div>
                        )}
                    </>
                )}

        </div>
    )
}

export default ChangePass
