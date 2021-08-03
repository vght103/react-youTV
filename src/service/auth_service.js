import firebase from "firebase";

class AuthService {
  login(providerName) {
    const authProvider = firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
