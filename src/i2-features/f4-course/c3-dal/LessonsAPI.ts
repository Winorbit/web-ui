import {instance} from '../../../i1-main/m3-dal/instance'
import {LessonType} from '../c2-bll/lessonsReducer'

export type GetLessonsRequestType = LessonType[]
// export type GetLessonsRequestType = {
//     count: number
//     next: any // any
//     previous: any // any
//     results: LessonType[]
// }

export const LessonsAPI = {
    getLessons: async () => {
        const response = await instance.get<GetLessonsRequestType>('lessons/')

        return response.data
    },
    getLessonsForCourse: async (courseId: string) => {
        const response = await instance.get<GetLessonsRequestType>('lessons_course/' + courseId + '/')

        return response.data
    },

}
