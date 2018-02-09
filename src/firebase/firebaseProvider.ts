
import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDWsymQLqFWZYjj2cOg-5OibwWmjklqX94',
    authDomain: 'nova-tagger.firebaseapp.com',
    databaseURL: 'https://nova-tagger.firebaseio.com',
    projectId: 'nova-tagger',
    storageBucket: 'nova-tagger.appspot.com',
    messagingSenderId: '1000251380453'
  };

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const firebaseFacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const firebaseDatabase = firebase.database;
