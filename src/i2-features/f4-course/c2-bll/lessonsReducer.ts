import {AppStoreType} from '../../../i1-main/m2-bll/store'
import {ThunkAction} from 'redux-thunk'
import {ExtraArg, InferActionsType, ReturnVoid, tryCatch} from '../../../i1-main/m2-bll/help'
import {LessonsAPI} from '../c3-dal/LessonsAPI'

export type LessonType = {
    id: string
    title: string
    description: string
    content: string
    cours: string
}

const initialState = {
    error: '',
    loading: false,
    success: false,
    lessons: [] as LessonType[],
}

export const lessonsReducer = (
    state = initialState,
    action: LessonsActionsType
): typeof initialState => {
    switch (action.type) {
        case 'lessons/SET_ERROR': {
            return {
                ...state,
                error: action.error,
                loading: false,
                success: false,
            }
        }
        case 'lessons/SET_LOADING': {
            return {
                ...state,
                error: '',
                loading: action.loading,
                success: false,
            }
        }
        case 'lessons/SET_SUCCESS': {
            return {
                ...state,
                error: '',
                loading: false,
                success: action.success,
            }
        }
        case 'lessons/SET_LESSONS': {
            return {
                ...state,
                lessons: action.lessons,
            }
        }

        default: {
            return state
        }
    }
}

export type LessonsActionsType = InferActionsType<typeof LessonsActions>

export const LessonsActions = {
    setLoading: (loading: boolean) => ({
        type: 'lessons/SET_LOADING',
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'lessons/SET_SUCCESS',
        success,
    } as const),
    setError: (error: string) => ({
        type: 'lessons/SET_ERROR',
        error,
    } as const),
    setLessons: (lessons: LessonType[]) => ({
        type: 'lessons/SET_LESSONS',
        lessons,
    } as const),

}

export const getLessons = (): ThunkAction<ReturnVoid, AppStoreType, ExtraArg, LessonsActionsType> => async (
    dispatch,
    // getStore: GetAppStoreType
) => {
    dispatch(LessonsActions.setLoading(true))

    await tryCatch(
        async () => {
            dispatch(LessonsActions.setLoading(true))
            dispatch(LessonsActions.setLessons([]))
            const data = await LessonsAPI.getLessons()

            dispatch(LessonsActions.setSuccess(true))
            dispatch(LessonsActions.setLessons(data))

            console.log('winter-orbit, Get lessons Success!', data)
        },
        (e) => dispatch(LessonsActions.setError(e)),
        'Get lessons',
    )
}
export const getLessonsForCourse = (courseId: string): ThunkAction<ReturnVoid, AppStoreType, ExtraArg, LessonsActionsType> => async (
    dispatch,
    // getStore: GetAppStoreType
) => {
    dispatch(LessonsActions.setLoading(true))

    await tryCatch(
        async () => {
            dispatch(LessonsActions.setLoading(true))
            dispatch(LessonsActions.setLessons([]))
            const data = await LessonsAPI.getLessonsForCourse(courseId)

            dispatch(LessonsActions.setSuccess(true))
            dispatch(LessonsActions.setLessons(data))

            console.log('winter-orbit, Get lessons Success!', data)
        },
        (e) => dispatch(LessonsActions.setError(e)),
        'Get lessons',
    )
}
