//  사용자가 카드를 생성하고 저장하고 삭제할 때 발생하는 함수들
//  firebase 리얼타임에서 실시간으로 업데이트 되고 삭제하는 것을 볼 수 있다.

import { firebaseDatabase } from "./firebase";

class CardRepository {
  // firebase 에서 해당경로에 데이터가 계속 업데이트가 된다면,
  // snapshot에 value 가 설정되어 있다면 onUpdate 콜백함수를 계속 실행한다.
  syncCards(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      if (value) {
        onUpdate(value);
      }
      // value 는 곧 maker 에서 온 cards 다
    });

    // 계속  sync 되는 함수를 끌 수 있는 함수
    return () => ref.off();
  }

  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
