import { firebaseAuth, githubProvider, googleProvider } from "./firebase";

// 사용자가 로그인/로그아웃 하는 것만 관리
class AuthService {
  // 로그인함수

  // providerName = 구글인지 트위터인지 깃허브인지를 받아온다.
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    // const provider = new firebaseAuth.auth.GoogleAuthProvider();
    //  구글을 받아온 providerName 으로 넣어주면 꼭 구글이 아니더라도 다 가능

    return firebaseAuth.signInWithPopup(authProvider);
    // 과연?
  }

  // 로그아웃 함수

  logout() {
    firebaseAuth.signOut();
  }

  // onUserChanged 라는 콜백함수를 받는 함수이다.
  // .onAuthStateChanged((user) 에서 user 가 바뀔 때마다
  // onUserChanged 에 바뀐 user를 전달해 실행한다.
  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`지원되지 않는 provider: ${providerName}`);
    }
  }
}

export default AuthService;
