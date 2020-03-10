import * as firebase from "firebase/app";
// Firebase App (the core Firebase SDK) is always required and must be listed first

export function setupFirebase(){
    const firebaseConfig = {
        // apiKey: "",
        // authDomain: "",
        // databaseURL: "",
        // projectId: "",
        // storageBucket: "",
        // messagingSenderId: "",
        // appId: ""
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}