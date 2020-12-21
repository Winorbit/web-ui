import React, {ChangeEvent, useState} from 'react'
import s from './OrbitInput.module.css'
import eye from '../../assets/eye.png'
import union from '../../assets/Union.png'

type OrbitInputPropsType = {
    inputType?: 'def' | 'pass'
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

const OrbitInput: React.FC<OrbitInputPropsType> = (
    {inputType = 'def', value, onChange, placeholder}
    ) => {
    const [show, setShow] = useState<boolean>(false)

    return (
        <>
            {inputType === 'def' ? (
                <>
                    <input
                        placeholder={placeholder}
                        className={s.input}
                        value={value}
                        onChange={onChange}
                    />
                </>
            ) : (
                <label>
                    <input
                        placeholder={placeholder}
                        className={s.input}
                        type={show ? 'text' : 'password'}
                        value={value}
                        onChange={onChange}
                    />
                    <img
                        className={show ? s.eye : s.union}
                        src={show ? eye : union}
                        alt={'eye'}
                        onClick={() => setShow(!show)}
                    />
                </label>
            )}

        </>
    )
}

export default OrbitInput
