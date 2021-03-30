import {instance} from '../../../i1-main/m3-dal/instance'
import {UserType} from '../../../i1-main/m2-bll/appReducer'

export type SignInDataType = UserType

export const LoginAPI = {
    signIn: async (email: string, password: string) => {
        const response = await instance.post<SignInDataType>('search_userprofile', {username: email, password})

        return response.data
    },

}
