import React, {useEffect, useState} from 'react'
import {instance} from "../../../../i1-main/m3-dal/instance";
import Video from './Video'
import s from './Videos.module.css'
import up from './../../../../assets/up.png'
import down from './../../../../assets/down.png'

export type VideoType = {
    description: string
    source_link: string
    title: string
}

const Videos = () => {
    const [videos, setVideos] = useState<VideoType[]>([
        // {source_link: '', title: 'xxx', description: ''},
        // {source_link: '', title: 'xxx', description: ''},
        // {source_link: '', title: 'xxx', description: ''},
        // {source_link: '', title: 'xxx', description: ''},
        // {source_link: '', title: 'xxx', description: ''},
        // {source_link: '', title: 'xxx', description: ''},
        // {source_link: '', title: 'xxx', description: ''},
        // {source_link: '', title: 'xxx', description: ''},
        // {source_link: '', title: 'xxx', description: ''},

    ])
    const [page, setPage] = useState(1)

    useEffect(() => {
        instance.get('video_lessons/')
            .then(res => {

                setVideos([
                    ...res.data.results,
                    // ...res.data.results,
                    // ...res.data.results,
                    // ...res.data.results,
                    // ...res.data.results,
                ])
            })

    }, [setVideos])

    const start = page === 1
    const end = page === ((videos.length - videos.length % 8) / 8) + (videos.length % 8 ? 1 : 0)

    const pages = Array(((videos.length - videos.length % 8) / 8) + (videos.length % 8 ? 1 : 0))
        .fill(0).map((e, i) => i + 1)

    return (
        <div className={s.pageAll}>
            <div className={s.pagination}>
                <div
                    // className={s.arrow}
                    onClick={() => page > 1 && setPage(page - 1)}
                >
                    {start ? (
                        <img src={up} alt={'up'}/>
                    ) : (
                        <img className={s.rotate} src={down} alt={'down'}/>
                    )}
                </div>

                <div className={s.lines}>
                    {pages.map(p => (
                        <div
                            key={p + p}
                            className={p === page ? s.activePage : s.page}
                            onClick={() => setPage(p)}
                        />
                        // >{p}</div>
                    ))}
                </div>

                <div
                    // className={s.arrow}
                    onClick={() => {
                        page < ((videos.length - videos.length % 8) / 8) + (videos.length % 8 ? 1 : 0)
                        && setPage(page + 1)
                    }}
                >
                    {end ? (
                        <img className={s.rotate} src={up} alt={'up'}/>
                    ) : (
                        <img src={down} alt={'down'}/>
                    )}
                </div>

            </div>

            <div className={s.videoPage}>
                {videos.filter((vff, iff) => {
                    return !(((iff + 1) <= 8 * (page - 1)) || ((iff + 1) > 8 * page))
                }).map((v, i) => (
                    <Video key={v.title + i} video={v} i={i}/>
                ))}
            </div>
        </div>

    )
}

export default Videos
