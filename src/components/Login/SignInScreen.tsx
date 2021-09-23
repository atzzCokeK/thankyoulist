import React from 'react';
import {firebaseApp} from '../../Firebase';
import firebase from "firebase/app"
import "firebase/auth"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: "/top",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
}

const SignInScreen = () => {
  return (
    <div>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
    </div>
  );
}


export default SignInScreen;
