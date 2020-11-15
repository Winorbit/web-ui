import {CSSProperties} from 'react'

type ItemType = {
    _id: string
    type: 'span' | 'term'
    style: CSSProperties
    text: string
}

type BlockType = {
    _id: string
    type: 'div'
    style: CSSProperties
    content: ItemType[]
}

type LessonType = {
    _id: string
    name: string
    content: BlockType[]
}

type TermType = {
    _id: string
    word: string
    text: string
}

type CourseType = {
    _id: string
    name: string
    lessons: LessonType[]
    terms: TermType[]
}

export const courses: CourseType[] = [
    { // course 1
        _id: '1',
        name: 'x',
        lessons: [
            { // lesson
                _id: '1.1',
                name: 'lesson1',
                content: [ // text in lesson
                    {
                        _id: '1.1.1',
                        type: 'div',
                        style: {color: 'blue'},
                        content: [
                            {
                                _id: '1.1.1.1',
                                type: 'span',
                                style: {},
                                text: 'Lesson1'
                            },
                        ],
                    },

                    {
                        _id: '1.1.2',
                        type: 'div',
                        style: {},
                        content: [
                            {
                                _id: '1.1.2.1',
                                type: 'span',
                                style: {color: 'lime'},
                                text: 'many words'
                            },
                            {
                                _id: '1.1.2.2',
                                type: 'term',
                                style: {color: 'red'},
                                text: 'term'
                            },
                            {
                                _id: '1.1.2.3',
                                type: 'span',
                                style: {color: 'lime'},
                                text: 'many words'
                            },
                        ],
                    },
                    {
                        _id: '1.1.3',
                        type: 'div',
                        style: {},
                        content: [
                            {
                                _id: '1.1.3.1',
                                type: 'term',
                                style: {color: 'red'},
                                text: 'term2'
                            },
                            {
                                _id: '1.1.3.2',
                                type: 'span',
                                style: {color: 'lime'},
                                text: 'many words'
                            },
                        ],
                    },


                ],

            },

            { // lesson
                _id: '1.2',
                name: 'lesson2',
                content: [
                    {
                        _id: '1.2.1',
                        type: 'div',
                        style: {color: 'blue'},
                        content: [
                            {
                                _id: '1.2.1.1',
                                type: 'span',
                                style: {},
                                text: 'Lesson2'
                            },
                        ],
                    },

                ]
            }
        ],
        terms: [
            {
                _id: 't-1',
                word: 'term',
                text: 'many words about',
            },
{
                _id: 't-2',
                word: 'term2',
                text: 'many words about2',
            },

            // other words
        ],
    },

    // course 2
]

export const getCourse = (id: string) => {
    return courses.find(c => c._id === id) || 'error'
}