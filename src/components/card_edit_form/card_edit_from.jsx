import React from "react";
import Button from "../button/button";
import ImgFileInput from "../img_file_input/img_file_input";
import styles from "./card_edit_form.module.css";

const CardEditFrom = ({ card }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;

  const onSubmit = () => {};

  return (
    // input의 value 는 card 에서 정보를 받아온다.
    <form className={styles.form}>
      <input className={styles.input} name="name" value={name} />
      <input className={styles.input} name="company" value={company} />

      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>

      <input className={styles.input} name="titlee" value={title} />
      <input className={styles.input} name="email" value={email} />

      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <ImgFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditFrom;
