import React from 'react'
import vk from './vk.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import youtube from './youtube.png'
import s from './Contacts.module.css'

const Contacts = () => {

    return (
        <div className={s.contacts}>
            <img src={vk} alt={'vk'}/>
            <img src={facebook} alt={'facebook'}/>
            <img src={instagram} alt={'instagram'}/>
            <img src={youtube} alt={'youtube'}/>
        </div>
    )
}

export default Contacts
