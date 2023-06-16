import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2Bx0yrRdRcIP-RjhPmOCkLt7RQU11LDk",
    authDomain: "kanocds.firebaseapp.com",
    databaseURL: "https://kanocds-default-rtdb.firebaseio.com",
    projectId: "kanocds",
    storageBucket: "kanocds.appspot.com",
    messagingSenderId: "40213994933",
    appId: "1:40213994933:web:c80d8947f6f7125737cdfc",
    measurementId: "G-48WPNNL68G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;