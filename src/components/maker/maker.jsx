import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

// 로그아웃을 하기위해 authService 를 받아온다.
const Maker = ({ authService, FileInput, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;

  const [cards, setCards] = useState({
    // 데이터베이스를 이용할거라 여기는 비워놓고,
    // 사용자가 카드 업데이트 혹은 삭제할 때, firebase 를 사용한 데이터베이스에
    // 저장하고 삭제한다
  });

  // 유저의 id 로 데이터베이스를 불러오고 하기 때문에 userid 업데이트
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    // 마운트가 되었을 때, 그리고 userId 가 변경될때마다 호출
    if (!userId) {
      return;
    }

    const stopSync = cardRepository.syncCards(userId, (cards) => {
      // stopSync 는 cardRepository.js 에 return () => ref.off(); 이다
      //  컴포넌트가 언마운트 되었을 때 불필요한 네트워크 사용 최소화
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    // 로그인 관련 useEffect
    // 로그아웃이 되서 유저가 없는걸 감지하여 홈으로 보냄
    authService.onAuthChange((user) => {
      // 유저가 있으면 setUserId 업데이트
      // 유저 없으면 "/"로
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, history]);

  // firebase 데이터 이용한 것
  const addOrUpdateCard = (card) => {
    // 전체 스테이트를 모두 업데이트 해줘야하기 때문에
    // 기존 cards를 모두 복사해온다

    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={addOrUpdateCard}
          updateCard={addOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
