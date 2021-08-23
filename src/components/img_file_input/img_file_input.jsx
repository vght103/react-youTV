import React, { useRef } from "react";
import styles from "./img_file_input.module.css";

const ImgFileInput = ({ imageUpload, name, onFileChange }) => {
  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    // 이미지업로드 클래스에서 async 를 했기 때문에 promise 를 받는다
    // 그래서 .then 해줘야함

    const uploaded = await imageUpload.upload(event.target.files[0]);
    console.log(event.target.files[0]);
    console.log(uploaded);

    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    // input을 숨김처리 해놓고, 스타일링한 박스를 클릭시 input이 실행되게 해야한다
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || "No File"}
      </button>
    </div>
  );
};
export default ImgFileInput;
