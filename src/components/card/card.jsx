import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = process.env.PUBLIC_URL + "/images/default_logo.png";

const Card = ({ card }) => {
  // 다중 변수 할당가능
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;

  console.log(email);

  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card_list} ${getStyles(theme)}`}>
      <img src={url} alt="profile photo" className={styles.photo} />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );

  // 카드 색상 바꾸는 함수
  function getStyles(theme) {
    switch (theme) {
      case "dark":
        return styles.dark;

      case "light":
        return styles.light;

      case "colorful":
        return styles.colorful;

      default:
        throw new Error(`알수없는 오류: ${theme}`);
    }
  }
};

export default Card;
