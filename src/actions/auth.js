import { getAuth, signInWithPopup } from '@firebase/auth';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig.js';
import { types} from '../types/types.js'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Pedro'))
        }, 3500);
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