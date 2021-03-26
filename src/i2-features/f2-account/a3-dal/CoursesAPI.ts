import {instance} from '../../../i1-main/m3-dal/instance'
import {CourseType} from '../a2-bll/coursesReducer'

export type GetCoursesRequestType = {
    count: number
    next: any // any
    previous: any // any
    results: CourseType[]
}

export const CoursesAPI = {
    getCourses: async () => {
        const response = await instance.get<GetCoursesRequestType>('courses/')

        return response.data
    },

}
