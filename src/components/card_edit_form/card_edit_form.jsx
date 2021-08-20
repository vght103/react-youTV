import React, { useRef } from "react";
import Button from "../button/button";
import ImgFileInput from "../img_file_input/img_file_input";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ card }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;

  // 각 내용들이 바뀌면 함수가 호출되도록 onChange 를 한다.
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
  };

  const onSubmit = () => {};

  return (
    // input의 value 는 card 에서 정보를 받아온다.
    <form className={styles.form}>
      <input ref={nameRef} className={styles.input} name="name" value={name} />
      <input
        onChange={onChange}
        ref={companyRef}
        className={styles.input}
        name="company"
        value={company}
      />

      <select
        onChange={onChange}
        ref={themeRef}
        className={styles.select}
        name="theme"
        value={theme}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>

      <input
        onChange={onChange}
        ref={titleRef}
        className={styles.input}
        name="title"
        value={title}
      />
      <input
        onChange={onChange}
        ref={emailRef}
        className={styles.input}
        name="email"
        value={email}
      />

      <textarearef
        onChange={onChange}
        ref={messageRef}
        className={styles.textarea}
        name="message"
        value={message}
      ></textarearef>
      <div className={styles.fileInput}>
        <ImgFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
