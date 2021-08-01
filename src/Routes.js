import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Signup from './components/auth/Signup'
import Signin from './components/auth/Signin'
import Home from './components/user/Home'

import First from './First'
import Deals from './components/user/Deals'
import { Contact } from './components/user/Contact'

const Routes=()=> {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/deals" component={Deals}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </Router>
    )
}

export default Routes
