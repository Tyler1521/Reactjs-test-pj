import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDC881emYqJP1jmlgAfJ4wUo0SRGD_NTQE",
    authDomain: "photowall-c3572.firebaseapp.com",
    databaseURL: "https://photowall-c3572.firebaseio.com",
    projectId: "photowall-c3572",
    storageBucket: "photowall-c3572.appspot.com",
    messagingSenderId: "639210227366",
    appId: "1:639210227366:web:e10735f2e6113c20645667",
    measurementId: "G-ZBFEBZJ4ZZ"
  };


firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}