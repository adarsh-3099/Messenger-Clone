import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCRJap_QbtHbSQiSHENGl8PWyOJ-Yqy5wE",
    authDomain: "messanger-5a984.firebaseapp.com",
    projectId: "messanger-5a984",
    storageBucket: "messanger-5a984.appspot.com",
    messagingSenderId: "37358334509",
    appId: "1:37358334509:web:ac5cab30400ae38f023ea4",
    measurementId: "G-1ZJYXPG9LZ"
})

const db = firebaseApp.firestore()

export default db