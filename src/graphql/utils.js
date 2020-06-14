import firebase, { auth } from '../firebase/firebase.utils';

export const loginUser = (scopes) => {
    if (!scopes) return false;
    const provider = new firebase.auth.GithubAuthProvider();
    scopes.map(scope => provider.addScope(scope));
    return firebase.auth().signInWithPopup(provider);
}

export const signOutUser = () => {
    return auth.signOut();
}