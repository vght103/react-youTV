import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, theme, title, email, message, fileName } = card;

  // 각 input의 내용들이 바뀌면 함수가 호출되도록 onChange 를 한다.
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();

    // 기존의 카드의 키와 밸류를 가져다 쓰면서
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    // input의 value 는 card 에서 정보를 받아온다.
    <form className={styles.form}>
      <input
        onChange={onChange}
        ref={nameRef}
        className={styles.input}
        name="name"
        value={name}
      />
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

      <textarea
        onChange={onChange}
        ref={messageRef}
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
