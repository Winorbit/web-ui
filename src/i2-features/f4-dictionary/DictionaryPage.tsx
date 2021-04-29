import React, {ChangeEvent, useEffect, useState} from 'react'
import PageWithNavbar from '../../i1-main/m1-ui/u6-navbar/PageWithNavbar'
import s from './Dictionary.module.css'
import find from './../../assets/find.svg'
import ItemDictionary from './item/ItemDictionary'
import {instance} from "../../i1-main/m3-dal/instance";

export type ArticlesType = {
    id: number
    title: string
    description: string
}

const DictionaryPage = () => {
    const [word, setWord] = useState('')
    const [wordF, setWordF] = useState('')
    const [articles, setArticles] = useState<ArticlesType[]>([])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWord(e.currentTarget.value.trim())
    }
    const onClick = () => setWordF(word)

    useEffect(() => {
        instance.get<{results: ArticlesType[]}>('articles/').then(res => {
            setArticles([
                ...res.data.results,
                // ...res.data.results,
                // ...res.data.results,
            ])
        })
    }, [])

    const content = articles
        .filter(c => new RegExp(wordF, 'ig').test(c.title))
        .map(l => (<ItemDictionary data={l} key={l.title}/>))

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
