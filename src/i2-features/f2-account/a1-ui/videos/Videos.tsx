import React, {useEffect, useState} from 'react'
import {instance} from "../../../../i1-main/m3-dal/instance";
import Video from './Video'
import s from './Videos.module.css'

export type VideoType = {
    description: string
    source_link: string
    title: string
}

const Videos = () => {
    const [videos, setVideos] = useState<VideoType[]>([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        instance.get('video_lessons/')
            .then(res => {

                setVideos([
                    ...res.data.results,
                    ...res.data.results,
                    ...res.data.results,
                    ...res.data.results,
                    ...res.data.results,
                ])
            })

    }, [setVideos])

    const pages = Array(((videos.length - videos.length % 8) / 8) + (videos.length % 8 ? 1 : 0))
        .fill(0).map((e, i) => i + 1)

    return (
        <>
            <div className={s.pagination}>
                <div className={s.arrow} onClick={() => page > 1 && setPage(page - 1)}>
                    {'<'}
                </div>
                {pages.map(p => (
                    <div
                        key={p + p}
                        className={p === page ? s.activePage : s.page}
                        onClick={() => setPage(p)}
                    >{p}</div>
                ))}
                <div
                    className={s.arrow}
                    onClick={() => {
                        page < ((videos.length - videos.length % 8) / 8) + (videos.length % 8 ? 1 : 0)
                        && setPage(page + 1)
                    }}
                >
                    {'>'}
                </div>

            </div>

            <div className={s.videoPage}>
                {videos.filter((vff, iff) => {
                    return !(((iff + 1) <= 8 * (page - 1)) || ((iff + 1) > 8 * page))
                }).map((v, i) => (
                    <Video key={v.title + i} video={v} i={i}/>
                ))}
            </div>
        </>

    )
}

export default Videos
