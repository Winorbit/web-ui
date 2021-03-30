import React from 'react'
import {Redirect} from 'react-router-dom'
import {PATH} from '../u2-main/Main'
import {useSelector} from 'react-redux'
import {AppStoreType} from '../../m2-bll/store'

type LoginRedirectPropsType = {
}

const LoginRedirect: React.FC<LoginRedirectPropsType> = (
    {
        children,
    }
) => {
    const {isAuth} = useSelector((store: AppStoreType) => store.app)
    if (!isAuth) return <Redirect to={PATH.LOGIN}/>

    return (
        <div>
            {children}
        </div>
    )
}

export default LoginRedirect
