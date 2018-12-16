import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBWS1mH61Ev1XzxMG5vjG23BfWTS9-GoAs",
  authDomain: "react-spa-8b299.firebaseapp.com",
  databaseURL: "https://react-spa-8b299.firebaseio.com",
  projectId: "react-spa-8b299",
  storageBucket: "react-spa-8b299.appspot.com",
  messagingSenderId: "1067325630464"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
