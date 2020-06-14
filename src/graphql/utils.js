import firebase, { auth } from '../firebase/firebase.utils';

export const loginUser = scopes => {
    const provider = new firebase.auth.GithubAuthProvider();
    if (!scopes) return false;
    scopes.map(scope => provider.addScope(scope));
    return firebase.auth().signInWithPopup(provider);
}

export const signOutUser = () => {
    return auth.signOut();
}