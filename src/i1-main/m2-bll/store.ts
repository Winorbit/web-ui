import thunkMiddleware from 'redux-thunk'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {appReducer} from './appReducer'
import {loginReducer} from '../../i2-features/f1-login/l2-bll/loginReducer'
import {coursesReducer} from '../../i2-features/f7-else/e1-account/a2-bll/coursesReducer'
import {lessonsReducer} from '../../i2-features/f7-else/e2-course/c2-bll/lessonsReducer'
import {RELEASE} from '../../baseBackURL'

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
if (!RELEASE) window.store = store // for developers, off in release
