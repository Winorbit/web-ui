import thunkMiddleware from 'redux-thunk'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {appReducer} from './appReducer'
import {loginReducer} from '../../i2-features/f1-login/l2-bll/loginReducer'
import {coursesReducer} from '../../i2-features/f2-account/a2-bll/coursesReducer'
import {lessonsReducer} from '../../i2-features/f4-course/c2-bll/lessonsReducer'

const reducers = combineReducers({
    app: appReducer,
    login: loginReducer,
    courses: coursesReducer,
    lessons: lessonsReducer,

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for developers
