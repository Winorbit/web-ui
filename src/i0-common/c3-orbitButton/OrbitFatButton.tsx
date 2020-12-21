import React from 'react'
import s from './OrbitFatButton.module.css'

type OrbitFatButtonPropsType = {
    disabled?: boolean
    onClick?: () => void
}

const OrbitFatButton: React.FC<OrbitFatButtonPropsType> = (
    {disabled, onClick, children}
) => {

    return (
        <button
            disabled={disabled}
            className={disabled ? s.disable : s.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default OrbitFatButton
