import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

// 로그아웃을 하기위해 authService 를 받아온다.
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    // 명함카드 데이터들
    {
      id: "1",
      name: "Sean",
      company: "Naver",
      theme: "dark",
      title: "Front-end Engineer",
      email: "vght103@naver.com",
      message: "Don't give up",
      fileNAme: "sean",
      fileURL: null,
    },

    {
      id: "2",
      name: "Lowell",
      company: "Kakao",
      theme: "light",
      title: "Front-end Engineer",
      email: "lowell@naver.com",
      message: "Make money",
      fileName: "lowell",
      fileURL: null,
    },

    {
      id: "3",
      name: "Paul",
      company: "Coupang",
      theme: "colorful",
      title: "Front-end Engineer",
      email: "paul@naver.com",
      message: "What do you want?",
      fileNAme: "paul",
      fileURL: "paul.png",
    },
  ]);

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    // 로그아웃이 되서 유저가 없는걸 감지하여 홈으로 보냄
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addNewCard = (newCard) => {
    const updatedCard = [...cards, newCard];
    setCards(updatedCard);
    console.log(newCard);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} onAddCard={addNewCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
