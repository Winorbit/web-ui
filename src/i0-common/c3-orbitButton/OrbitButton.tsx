import React from 'react'
import s from './OrbitButton.module.css'

type OrbitButtonPropsType = {
    disabled?: boolean
    onClick?: () => void
}

const OrbitButton: React.FC<OrbitButtonPropsType> = (
    {disabled, onClick, children}
) => {

    return (
        <button
            disabled={disabled}
            className={s.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default OrbitButton
