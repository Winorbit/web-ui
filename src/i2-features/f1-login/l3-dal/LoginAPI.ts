import {instance} from '../../../i1-main/m3-dal/instance'
import {UserType} from '../../f2-account/a1-ui/Account'

export type SignInDataType = UserType

export const LoginAPI = {
    signIn: async (email: string, password: string) => {
        const response = await instance.post<SignInDataType>('search_userprofile', {username: email, password})

        return response.data
    },

}
