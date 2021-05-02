import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCg5OV5qb2jc-yZTQi2C9vn9YvSvGRmsNw",
    authDomain: "takshshila-tsc.firebaseapp.com",
    projectId: "takshshila-tsc",
    storageBucket: "takshshila-tsc.appspot.com",
    messagingSenderId: "287835946501",
    appId: "1:287835946501:web:82b1e3ace853eee2d8666c",
    measurementId: "G-N3FHETVGSL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };