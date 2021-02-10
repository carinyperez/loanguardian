import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyA8tVEcidojQ8-uT_1l-aBtvzOswXJdf_E",
    authDomain: "loanguardian-86fa5.firebaseapp.com",
    projectId: "loanguardian-86fa5",
    storageBucket: "loanguardian-86fa5.appspot.com",
    messagingSenderId: "109909351189",
    appId: "1:109909351189:web:562372e12b5fe53143671c",
    measurementId: "G-29YNYSB4DN"
};


export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return; 
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // get the collection reference 
    const collectionRef = firestore.collection('users'); 
    // use CRUD methods on a doc ref to get a snapshot 
    const snapShot = await userRef.get(); 


    // if snapshot does not exiist create an object reference
    if(!snapShot.exists) {
        const {displayName, email} = userAuth; 
        const createdAt = new Date(); 

        try {
            await userRef.set({
                displayName,
                email,
                createdAt, 
                ...additionalData
            }); 
        } catch(error) {
            console.log('error creating user', error.message); 
        }
    }
    return userRef; 
}


export const writeUserData = async (userId,typingPattern) => {
    const userRef = firestore.doc(`users/${userId}`);
    // get the collection reference 
    const collectionRef = firestore.collection('users'); 
    // use CRUD methods on a doc ref to get a snapshot 
    const snapShot = await userRef.get();
    const data = snapShot.data(); 
    userRef.set({
        typingPattern : typingPattern,
    },{ merge: true }); 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
    
}

export default firebase;




