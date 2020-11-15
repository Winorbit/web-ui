import {InferActionsType, ReturnVoid, ExtraArg, tryCatch} from '../../../i1-main/m2-bll/help'
import { ThunkAction } from 'redux-thunk'
import { AppStoreType } from '../../../i1-main/m2-bll/store'
import {CoursesAPI} from "../a3-dal/CoursesAPI";

export type CourseType = {
    id: string
    title: string
    description: string
    content: string
}

const initialState = {
    error: '',
    loading: false,
    success: false,
    courses: [] as CourseType[]
}

export const coursesReducer = (state = initialState, action: CoursesActionsType): typeof initialState => {
    switch (action.type) {
        case 'courses/SET_ERROR': {
            return {
                ...state,
                error: action.error,
                loading: false,
                success: false,
            }
        }
        case 'courses/SET_LOADING': {
            return {
                ...state,
                error: '',
                loading: action.loading,
                success: false,
            }
        }
        case 'courses/SET_SUCCESS': {
            return {
                ...state,
                error: '',
                loading: false,
                success: action.success,
            }
        }
        case "courses/SET_COURSES": {
            return {
                ...state,
                courses: action.courses,
            }
        }

        default: {
            return state
        }
    }
}

export type CoursesActionsType = InferActionsType<typeof CoursesActions>

export const CoursesActions = {
    setLoading: (loading: boolean) => ({
        type: 'courses/SET_LOADING',
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'courses/SET_SUCCESS',
        success,
    } as const),
    setError: (error: string) => ({
        type: 'courses/SET_ERROR',
        error,
    } as const),
    setCourses: (courses: CourseType[]) => ({
        type: 'courses/SET_COURSES',
        courses,
    } as const),

}

export const getCourses = (): ThunkAction<ReturnVoid, AppStoreType, ExtraArg, CoursesActionsType> => async (
    dispatch,
    // getStore: GetAppStoreType
) => {
    dispatch(CoursesActions.setLoading(true))

    await tryCatch(
        async () => {
            dispatch(CoursesActions.setLoading(true))
            const data = await CoursesAPI.getCourses()

            dispatch(CoursesActions.setSuccess(true))
            dispatch(CoursesActions.setCourses(data.results))

            setTimeout(() => {
                dispatch(CoursesActions.setSuccess(false))
            }, 500)

            console.log('winter-orbit, Get courses Success!', data)
        },
        (e) => dispatch(CoursesActions.setError(e)),
        'Get courses',
    )
}
