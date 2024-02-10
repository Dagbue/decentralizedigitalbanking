import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
    apiKey: "AIzaSyC_EVAuEvLcYbLLnzwW6ZUT7UH74KtawU0",
    authDomain: "decentralizeddigitalbanking.firebaseapp.com",
    projectId: "decentralizeddigitalbanking",
    storageBucket: "decentralizeddigitalbanking.appspot.com",
    messagingSenderId: "260255613324",
    appId: "1:260255613324:web:aa461ad2a60e3b956e56a9"
};

// init firebase
initializeApp(firebaseConfig)





//init firebase auth
const auth = getAuth();

const database = getDatabase();

const db = getFirestore();

const storage = getStorage();



export { auth, db, database, storage}

