import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import s from './Main.module.css'
import Header from '../u3-header/Header'
import LoginPage from '../../../i2-features/f1-login/l1-ui/LoginPage'
import LoginRedirect from '../u5-login-redirect/LoginRedirect'
import LessonsPage from '../../../i2-features/f2-lessons/LessonsPage'

export const PATH = {
    HOME: '/',
    LOGIN: '/login',

    // FORGOT: '/forgot',

    // лекции, урок, словарь, полезные ссылки
    LESSONS: '/lessons',
    LESSON: '/lesson',
    DICTIONARY: '/dictionary',
    LINKS: '/links',

}

const Main = () => {
    return (
        <div className={s.main}>
            <div>
                <Header/>

                <Switch>
                    <Route path={PATH.HOME} exact render={() => <Redirect to={PATH.LOGIN}/>}/>

                    <Route path={PATH.LOGIN} exact render={() => <LoginPage/>}/>
                    {/*<Route path={PATH.FORGOT} exact render={() => <Forgot/>}/>*/}
                    {/*<Route path={PATH.FORGOT + '/:token'} exact render={() => <Forgot/>}/>*/}

                    <Route
                        path={PATH.LESSONS}
                        exact
                        render={() => (
                            <>
                                <LoginRedirect>
                                    <LessonsPage/>
                                </LoginRedirect>
                            </>
                        )}
                    />


                    <Route render={() => <div>404</div>}/>
                </Switch>
            </div>
        </div>
    )
}

export default Main
