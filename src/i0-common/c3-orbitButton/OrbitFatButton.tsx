import React from 'react'
import s from './OrbitFatButton.module.css'

type OrbitFatButtonPropsType = {
    disabled?: boolean
    onClick?: () => void
    blue?: boolean
}

const OrbitFatButton: React.FC<OrbitFatButtonPropsType> = (
    {disabled, onClick, children, blue}
) => {

    return (
        <button
            disabled={disabled}
            className={disabled
                ? s.disable
                : blue
                    ? s.blue
                    : s.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default OrbitFatButton
