import React, { useRef } from "react";
import Button from "../button/button";
import ImgFileInput from "../img_file_input/img_file_input";
import styles from "./card_add_form.module.css";

// CardAddForm에 onSubmit 콜백함수를 프롭으로 받아와서 함수 실행할거다.
const CardAddForm = ({ onAddCard }) => {
  //  Add 를 해서 서밋됐을 때 각 인풋에 있는 데이터를 읽어오기 위해 ref 지정

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleeRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      titlee: titleeRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileUrl: "",
    };

    // 사용자가 서밋하고 나면 form 으로 리셋한다.
    formRef.current.reset();
    onAddCard(newCard);
    console.log(newCard);
  };

  return (
    // input의 placeholder 는 card 에서 정보를 받아온다.
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        name="name"
        placeholder="Name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        name="company"
        placeholder="Company"
      />

      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="Theme"
      >
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>

      <input
        ref={titleeRef}
        className={styles.input}
        name="titlee"
        placeholder="Title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        name="email"
        placeholder="Email"
      />

      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="Message"
      ></textarea>
      <div className={styles.fileInput}>
        <ImgFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
