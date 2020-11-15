import React from 'react'
import Account from './Account'
import {useSelector} from 'react-redux'
import {AppStoreType} from '../../../i1-main/m2-bll/store'

const AccountPage = () => {
    const {data} = useSelector((store: AppStoreType) => store.app)

    return (
        <>
            <Account profile={data}/>
        </>
    )
}

export default AccountPage
