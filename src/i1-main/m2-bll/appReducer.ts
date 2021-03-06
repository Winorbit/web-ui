import {InferActionsType} from './help'

export type UserType = {
    email: string
    id: number
    is_superuser: boolean
    username: string
    profile_image: undefined
    user_courses: string[]
    groups?: string[]
}

const initialState = {
    isAuth: false,
    data: undefined as UserType | undefined,
    lesson: undefined as string | undefined,
}

export const appReducer = (
    state = initialState,
    action: AppActionsType
): typeof initialState => {
    switch (action.type) {
        case 'app/SET_IS_AUTH': {
            return {
                ...state,
                isAuth: action.isAuth,
                data: action.data,
            }
        }
        case 'app/UPDATE_USER': {
            return {
                ...state,
                data: action.data,
            }
        }
        case 'app/SET_LESSON': {
            return {
                ...state,
                lesson: action.id,
            }
        }

        default: {
            return state
        }
    }
}

export type AppActionsType = InferActionsType<typeof AppActions>

export const AppActions = {
    setIsAuth: (isAuth: boolean, data?: UserType) => ({
        type: 'app/SET_IS_AUTH',
        isAuth,
        data,
    } as const),
    updateUser: (data?: UserType) => ({
        type: 'app/UPDATE_USER',
        data,
    } as const),
    setLesson: (id: string) => ({
        type: 'app/SET_LESSON',
        id,
    } as const),

}
