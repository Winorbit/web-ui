import React from 'react'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import './App.css'
import Main from '../u2-main/Main'
import store from '../../m2-bll/store'

// contexts
const App = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <div className='App'>
                    <Main/>
                </div>
            </Provider>
        </HashRouter>
    )
}

export default App
