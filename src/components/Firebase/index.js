import React from 'react';

import firebase from 'firebase/app';
import "firebase/auth";

import FirebaseContext from './context';

const config = {
  apiKey: "AIzaSyDZY9mpx63UWMtfY8HgLKcJrXCsuhX-jEg",
  authDomain: "vsinfo-94974.firebaseapp.com",
  databaseURL: "https://vsinfo-94974.firebaseio.com",
  projectId: "vsinfo-94974",
  storageBucket: "vsinfo-94974.appspot.com",
  messagingSenderId: "50864909297",
  appId: "1:50864909297:web:d5e4ff060d710774"
};

const Firebase = () => {
  firebase.initializeApp(config);

  const provider = new firebase.auth.GoogleAuthProvider();

  return {
    auth: firebase.auth(),
    signIn: () => {
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        // TODO
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // TODO
      });
    },
    signOut: () => {
      firebase.auth().signOut().then(function() {
        // TODO
        // Sign-out successful.
      }).catch(function(error) {
        // TODO
        // An error happened.
      });
    }
  };
};

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => (
      <Component {...props} firebase={firebase}/>
    )}
  </FirebaseContext.Consumer>
);

export default Firebase;
export { FirebaseContext, withFirebase };
