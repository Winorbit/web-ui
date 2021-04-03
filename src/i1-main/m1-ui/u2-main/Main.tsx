import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import s from './Main.module.css'
import Header from '../u3-header/Header'
import LoginPage from '../../../i2-features/f1-login/l1-ui/LoginPage'
import LoginRedirect from '../u5-login-redirect/LoginRedirect'
import LessonsPage from '../../../i2-features/f2-lessons/LessonsPage'
import PageWithNavbar from '../u6-navbar/PageWithNavbar'
import LessonPage from '../../../i2-features/f3-lesson/LessonPage'
import DictionaryPage from '../../../i2-features/f4-dictionary/DictionaryPage'
import LinksPage from '../../../i2-features/f5-links/LinksPage'

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
                    <Route
                        path={PATH.LESSON}
                        exact
                        render={() => (
                            <>
                                <LoginRedirect>
                                    <LessonPage/>
                                </LoginRedirect>
                            </>
                        )}
                    />
                    <Route
                        path={PATH.DICTIONARY}
                        exact
                        render={() => (
                            <>
                                <LoginRedirect>
                                    <DictionaryPage/>
                                </LoginRedirect>
                            </>
                        )}
                    />
                    <Route
                        path={PATH.LINKS}
                        exact
                        render={() => (
                            <>
                                <LoginRedirect>
                                    <LinksPage/>
                                </LoginRedirect>
                            </>
                        )}
                    />


                    <Route render={() => <PageWithNavbar>404</PageWithNavbar>}/>
                </Switch>
            </div>
        </div>
    )
}

export default Main
