import {AppStoreType} from './store'
import {RELEASE} from '../../baseBackURL'

export type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends { [key: string]: (...arg: any[]) => any }> = ReturnType<PropertiesType<T>>

export type ReturnVoid = void
export type ExtraArg = {}
export type GetAppStoreType = () => AppStoreType

export const tryCatch = async (
    logic: () => void,
    setError: (error: string) => void, // | {any}: data
    info: string
) => {
    try {
        await logic()

    } catch (e) {
        const error = e.response ? e.response.data : (e.message + ', more details in the console')
        setError(error)

        !RELEASE && console.log('winter-orbit, ' + info + ' Error!', {...e})
    }
}
