import {AppStoreType} from '../../../i1-main/m2-bll/store'
import {ThunkAction} from 'redux-thunk'
import {LoginAPI} from '../l3-dal/LoginAPI'
import {AppActions, AppActionsType} from '../../../i1-main/m2-bll/appReducer'
import {InferActionsType, ReturnVoid, ExtraArg, tryCatch} from '../../../i1-main/m2-bll/help'

const initialState = {
    error: '',
    loading: false,
    success: false,
}

export const loginReducer = (
    state = initialState,
    action: LoginActionsType
): typeof initialState => {
    switch (action.type) {
        case 'login/SET_ERROR': {
            return {
                ...state,
                error: action.error,
                loading: false,
                success: false,
            }
        }
        case 'login/SET_LOADING': {
            return {
                ...state,
                error: '',
                loading: action.loading,
                success: false,
            }
        }
        case 'login/SET_SUCCESS': {
            return {
                ...state,
                error: '',
                loading: false,
                success: action.success,
            }
        }

        default: {
            return state
        }
    }
}

export type LoginActionsType = InferActionsType<typeof LoginActions>

export const LoginActions = {
    setLoading: (loading: boolean) => ({
        type: 'login/SET_LOADING',
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'login/SET_SUCCESS',
        success,
    } as const),
    setError: (error: string) => ({
        type: 'login/SET_ERROR',
        error,
    } as const),

}

export const signIn = (
    email: string, password: string
): ThunkAction<ReturnVoid, AppStoreType, ExtraArg, LoginActionsType | AppActionsType> => async (
    dispatch,
    // getStore: GetAppStoreType
) => {
    dispatch(LoginActions.setLoading(true))

    await tryCatch(
        async () => {
            dispatch(LoginActions.setLoading(true))
            const data = await LoginAPI.signIn(email, password)

            dispatch(LoginActions.setSuccess(true))
            dispatch(AppActions.setIsAuth(true, data))

            setTimeout(() => {
                dispatch(LoginActions.setSuccess(false))
            }, 500)

            console.log('winter-orbit, Login Success!', data)
        },
        (e) => dispatch(LoginActions.setError(e)),
        'Login',
    )
}
