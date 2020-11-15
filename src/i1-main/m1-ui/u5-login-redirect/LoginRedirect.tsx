import React from 'react'
import {Redirect} from 'react-router-dom'
import {PATH} from '../u2-main/Main'

type LoginRedirectPropsType = {
    isAuth: boolean
}

const LoginRedirect: React.FC<LoginRedirectPropsType> = (
    {
        children, isAuth
    }
) => {
    if (!isAuth) return <Redirect to={PATH.LOGIN}/>

    return (
        <div>
            {children}
        </div>
    )
}

export default LoginRedirect
