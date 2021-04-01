import React from 'react'
import PageWithNavbar from '../../i1-main/m1-ui/u6-navbar/PageWithNavbar'
import s from './Links.module.css'
import Link from './link/Link'

const LinksPage = () => {
    const content = [1, 2, 3, 4].map(l => (<Link key={l}/>))

    return (
        <PageWithNavbar>
            <div className={s.main}>
                {content}
            </div>
        </PageWithNavbar>
    )
}

export default LinksPage
