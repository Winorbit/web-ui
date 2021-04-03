import React from 'react'
import s from './Item.module.css'

type ItemDictionaryPropsType = {
    data: {
        name: string
    }
}

const ItemDictionary: React.FC<ItemDictionaryPropsType> = ({data}) => {
    return (
        <div className={s.main}>
            <div className={s.circle}>{data.name}</div>

            <div className={s.line}>
                Библиотека ArcPy (иногда называемая ArcPy site-package) обеспечивает доступ из Python ко всем
                инструментам геообработки, включая дополнительные модули, а также предлагает большое количество полезных
                функций и классов для работы с данными ГИС. Используя Python и ArcPy, можно разрабатывать большое
                количество удобных программ для работы с географическими данными.
            </div>
        </div>
    )
}

export default ItemDictionary
