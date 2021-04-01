import React from 'react'
import s from './../Links.module.css'

type LinkPropsType = {
    data?: {}
}

const Link: React.FC<LinkPropsType> = ({data}) => {
    return (
        <div className={s.block}>
            <a
                className={s.link}
                href={'https://desktop.arcgis.com/ru/arcmap/latest/analyze/python/what-is-python-.htm'}
                target={'_blank'}
                rel={'nofollow noopener'}
            >
                https://desktop.arcgis.com/ru/arcmap/latest/analyze/python/what-is-python-.htm
            </a>

            <div className={s.text}>
                информация по данной ссылке рассказывает что такое “язык Python”
            </div>
        </div>
    )
}

export default Link
