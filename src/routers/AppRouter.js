import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
    
} from "react-router-dom";

import { JournalScreen } from '../componets/journal/JournalScreen'
import ReactLoading from 'react-loading'

import { AuthRouter } from './AuthRouter'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth.js';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {

    const auth = getAuth();

    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user ) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            
            setChecking(false)
                
            
        })
        
    },[auth,dispatch,setChecking])

    if (checking) {
        return (
            <div className="auth__loading">
                <ReactLoading type={'spin'} color={"#5c62c5"} height={300} width={375} />
                </div>
        )
    }
    
    return (

       

        <Router>
            <div>
                <Switch>
                    <PublicRouter path="/auth" component={AuthRouter} isAuthenticated={isLoggedIn} />
                    <PrivateRouter exact isAuthenticated={isLoggedIn} path="/" component={JournalScreen} />
                    <Redirect to="/auth/login" />


                </Switch>

            </div>

        </Router>
    )
}
