import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from '@firebase/auth';
import {  googleAuthProvider } from '../firebase/firebaseConfig.js';
import { types} from '../types/types.js'
import { finishLoading, startLoading } from './ui.js';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(e => {
                console.log(e);
                dispatch(finishLoading());
        })
    }
}


export const startGoogleLogn = () => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
    dispatch(login(user.uid, user.displayName))
        });
        
    
    }
}
export const login = (uid, displayName) => {

    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startRegisterWithEmail= (email, password, name) => {
    return (dispatch) => {
        
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name });

                dispatch(login(user.uid, user.displayName))
                
            })
            .catch(e => {
                console.log(e)
            })
    }
}


export const startLogout = () => {
    
    const auth = getAuth();
    return async (dispatch) => {
    
        await signOut(auth);
        dispatch(logout())

}
}


export const logout = () => {
    
    return {
        type: types.logout
    }
}