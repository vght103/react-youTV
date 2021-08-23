// 쓰지않는 기능을 모두 firebase 에서 import 해오면 경고창이 뜬다.
// 쓰는 것만 놔둬보자
// 내가 쓰는것. auth 와 database (crad-repository) 다

// 1. firebase 안에 있는 app을 import
// 2. app 에서 내가 사용하는 2개 import
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// 내가 필요한 것만 export 해가게 만든다

//  그리고 각각 필요한 js 파일에 import 해서 쓴다
export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
