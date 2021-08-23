import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        로그아웃
      </button>
    )}
    <img
      src={process.env.PUBLIC_URL + "/images/logo.png"}
      alt="logo"
      className={styles.logo}
    />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
);

export default Header;
