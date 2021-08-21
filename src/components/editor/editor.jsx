import React from "react";
import styles from "./editor.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({ cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h2 className={styles.title}>Card Maker</h2>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        key={key}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm onAddCard={addCard} />
  </section>
);

export default Editor;
