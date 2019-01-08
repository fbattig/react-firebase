
import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDIzMHkAxLXCZvOF6wSgwRp4qFUbm-c2rE",
    authDomain: "diary-72773.firebaseapp.com",
    databaseURL: "https://diary-72773.firebaseio.com",
    projectId: "diary-72773",
    storageBucket: "diary-72773.appspot.com",
    messagingSenderId: "707653647005"
  };
firebase.initializeApp(config);
  
export const database = firebase.database().ref('/notes');
