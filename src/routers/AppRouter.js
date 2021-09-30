import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    
} from "react-router-dom";

import { JournalScreen } from '../componets/journal/JournalScreen'

import { AuthRouter } from './AuthRouter'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth.js';

export const AppRouter = () => {

    const auth = getAuth();

    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user ) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
            }
                
                
            
        })
        
    })

    
    return (

       

        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={JournalScreen} />
                    <Redirect to="/auth/login" />


                </Switch>

            </div>

        </Router>
    )
}
