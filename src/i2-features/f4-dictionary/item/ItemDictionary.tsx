import React from 'react'
import s from './Item.module.css'
import {ArticlesType} from '../DictionaryPage'

type ItemDictionaryPropsType = {
    data: ArticlesType
}

const ItemDictionary: React.FC<ItemDictionaryPropsType> = ({data}) => {
    return (
        <div className={s.main}>
            <div className={s.circle}>{data.title}</div>

            <div className={s.line}>
                {/*Библиотека ArcPy (иногда называемая ArcPy site-package) обеспечивает доступ из Python ко всем*/}
                {/*инструментам геообработки, включая дополнительные модули, а также предлагает большое количество полезных*/}
                {/*функций и классов для работы с данными ГИС. Используя Python и ArcPy, можно разрабатывать большое*/}
                {/*количество удобных программ для работы с географическими данными.*/}
                {data.description}
            </div>
        </div>
    )
}

export default ItemDictionary
