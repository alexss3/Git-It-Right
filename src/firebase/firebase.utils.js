import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBsZEcFO6o6HI_dEZu-nn4UGrDm-O_osPw",
    authDomain: "git-it-right-b0eba.firebaseapp.com",
    databaseURL: "https://git-it-right-b0eba.firebaseio.com",
    projectId: "git-it-right-b0eba",
    storageBucket: "git-it-right-b0eba.appspot.com",
    messagingSenderId: "804882098515",
    appId: "1:804882098515:web:c1326323753a606722d9a6"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();

export const githubProvider = new firebase.auth.GithubAuthProvider();

export const signInWithGithub = () => auth.signInWithPopup(githubProvider);

export default firebase;