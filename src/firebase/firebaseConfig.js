import 'firebase/firestore';
import 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2HN26S_8rE1treCVI3rY162sRJoVZ4cw",
    authDomain: "journal-app-6b03a.firebaseapp.com",
    projectId: "journal-app-6b03a",
    storageBucket: "journal-app-6b03a.appspot.com",
    messagingSenderId: "471889339209",
    appId: "1:471889339209:web:eb1728d0d243905a24f098"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    app
}