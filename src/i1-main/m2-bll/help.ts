import {AppStoreType} from './store'

export type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsType<T extends {[key: string]: (...arg: any[]) => any}> = ReturnType<PropertiesType<T>>

export type ReturnVoid = void
export type ExtraArg = {}
export type GetAppStoreType = () => AppStoreType

export const tryCatch = async (
    logic: () => void,
    setError: (error: string) => void,
    info: string
) => {
    try {
        await logic()

    } catch (e) {
        const error = e.response ? e.response.data : (e.message + ', more details in the console')
        setError(error)

        console.log('winter-orbit, ' + info + ' Error!', {...e})
    }
}
