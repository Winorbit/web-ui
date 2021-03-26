import React, {useState} from 'react'
import {VideoType} from './Videos'
import s from './Video.module.css'
import play from '../../../../../assets/play.svg'

type VideoPropsType = {
    video: VideoType
    i: number
}

const Video: React.FC<VideoPropsType> = ({video, i}) => {
    const [show, setShow] = useState(false)

    const close = () => {
        setShow(false)
    }
    const notClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }


    return (
        <div className={s.video}>
            {show && (
                <>
                    <div className={s.modal} onClick={close}>
                        <div className={s.inModal} onClick={notClose}>
                            {video.source_link[8] === 'w' ? (
                                <iframe
                                    width="800"
                                    height="600"
                                    // src="https://www.youtube.com/embed/XP59NBDhXFA"
                                    // src="https://www.youtube.com/watch?v=XP59NBDhXFA" // from back
                                    src={video.source_link.replace('watch?v=', 'embed/')}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <iframe
                                    src={video.source_link.replace('view?usp=sharing', 'preview')}
                                    // src="https://drive.google.com/file/d/17b5wDf982_iKc_IlHU88hi_RNuPKdXLR/preview"
                                    // src="https://drive.google.com/file/d/17b5wDf982_iKc_IlHU88hi_RNuPKdXLR/view?usp=sharing" // from back
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    frameBorder="0"
                                    width="800"
                                    height="600"
                                />
                            )}
                        </div>

                    </div>
                </>
            )}

            <div className={s.block}>
                <div className={s.titleBlock}>
                    <div>{video.title}</div>

                    <img src={play} alt={'play'} className={s.play}/>

                    <button className={s.button} onClick={() => setShow(true)}>Перейти</button>
                </div>
            </div>

            {/*<div>{video.source_link[8]}</div>*/}
            {/*<div>{video.source_link.replace('watch?v=', 'embed/')}</div>*/}
            {/*<div>{video.source_link.replace('view?usp=sharing', 'preview')}</div>*/}

            {/*<video src={video.source_link} controls/>*/}

            {video.source_link[8] === 'w' ? (
                <iframe
                    width="285"
                    height="240"
                    // src="https://www.youtube.com/embed/XP59NBDhXFA"
                    // src="https://www.youtube.com/watch?v=XP59NBDhXFA" // from back
                    src={video.source_link.replace('watch?v=', 'embed/')}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <iframe
                    src={video.source_link.replace('view?usp=sharing', 'preview')}
                    // src="https://drive.google.com/file/d/17b5wDf982_iKc_IlHU88hi_RNuPKdXLR/preview"
                    // src="https://drive.google.com/file/d/17b5wDf982_iKc_IlHU88hi_RNuPKdXLR/view?usp=sharing" // from back
                    frameBorder="0"
                    width="285"
                    height="240"
                />
            )}
        </div>
    )
}

export default Video
