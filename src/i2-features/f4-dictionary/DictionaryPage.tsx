import React, {ChangeEvent, useState} from 'react'
import PageWithNavbar from '../../i1-main/m1-ui/u6-navbar/PageWithNavbar'
import s from './Dictionary.module.css'
import find from './../../assets/find.svg'
import ItemDictionary from "./item/ItemDictionary";

const DictionaryPage = () => {
    const [word, setWord] = useState('')
    const [wordF, setWordF] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWord(e.currentTarget.value.trim())
    }
    const onClick = () => setWordF(word)

    const content = [
        {name: 'abc'},
        {name: 'bcd'},
        {name: 'abcd'},
        {name: 'cd'},
    ].filter(c => new RegExp(wordF, 'ig').test(c.name)).map(l => (<ItemDictionary data={l}/>))

    return (
        <PageWithNavbar>
            <div className={s.main}>
                <div className={s.find}>
                    <div>
                        <img src={find} alt={'find'} className={s.img}/>
                        <input placeholder={'введите слово'} value={word} onChange={onChange} className={s.input}/>
                    </div>

                    <div className={s.line}/>

                    <button className={s.button} onClick={onClick}>найти</button>
                </div>

                {content}
            </div>
        </PageWithNavbar>
    )
}

export default DictionaryPage
