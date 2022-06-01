// Import the functions you need from the SDKs you need in your app.
// importo la configuracion de firebase de la carpeta compat que me da compativilidad con la sintaxis de la V8 de firebase para que no de error
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1Tgj0REwWnbskdxcZbsHojjrV-4hq3vI",
  authDomain: "react-test-fbase.firebaseapp.com",
  projectId: "react-test-fbase",
  storageBucket: "react-test-fbase.appspot.com",
  messagingSenderId: "13491566983",
  appId: "1:13491566983:web:5b3fd7ef66e835ea40bb22",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
