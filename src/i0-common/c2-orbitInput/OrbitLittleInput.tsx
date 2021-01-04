import React, {ChangeEvent, useState} from 'react'
import s from './OrbitLittleInput.module.css'
import eye from '../../assets/eye.png'
import union from '../../assets/Union.png'

type OrbitLittleInputPropsType = {
    placeholder?: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    circle?: 'red' | 'red2' | 'white'
    pass?: boolean
}

const OrbitLittleInput: React.FC<OrbitLittleInputPropsType> = (
    {value, onChange, circle, placeholder, pass = true}
) => {
    const [show, setShow] = useState<boolean>(!pass)

    return (
        <>
            <label>
                <input
                    placeholder={placeholder}
                    className={pass ? s.input : s.inp}
                    type={show ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    autoFocus={!pass}
                />
                {pass && (
                    <img
                        className={show ? s.eye : s.union}
                        src={show ? eye : union}
                        alt={'eye'}
                        onClick={() => setShow(!show)}
                    />
                )}
                {circle && (
                    <div className={circle === 'red'
                        ? s.redCircle
                        : circle === 'red2'
                            ? s.newRedCircle
                            : s.whiteCircle}/>
                )}
            </label>
        </>

    )
}

export default OrbitLittleInput
