import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA04h6ofP6_40VjcIOrYzqJ2sHS9HEzzo4",
  authDomain: "thank-you-list-3358e.firebaseapp.com",
  databaseURL: "https://thank-you-list-3358e.firebaseio.com",
  projectId: "thank-you-list-3358e",
  storageBucket: "thank-you-list-3358e.appspot.com",
  messagingSenderId: "24612260137",
  appId: "1:24612260137:web:a09577d8dded56813bcf38",
  measurementId: "G-2H569FD1V5"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const fbdb = firebase.firestore(firebaseApp)