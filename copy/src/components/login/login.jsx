import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  // 로그인 할 수 있는 함수
  const history = useHistory();

  // goToMaker 를 실행할 때 userId 를 받을거다.
  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
      // 단순히 /maker 로 가는게 아니라 사용자의 정보도 같이 전달해주게 한다.)
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  // 특정상황에 마운트되거나 업데이트 될 때 로그아웃 함수가 일어나게 한다.
  // 로그인 관련된거라 auth_service.js 에서 작성한 것을 가져와서 호출
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
    // 기존에 사용자가 있으면 goToMaker 로 간다.
  });

  return (
    <section className={styles.login}>
      <Header authService={authService} />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
