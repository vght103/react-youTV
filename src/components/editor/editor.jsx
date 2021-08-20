import React from "react";
import styles from "./editor.module.css";
import CardEditFrom from "../card_edit_form/card_edit_from";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({ cards, onAddCard }) => (
  <section className={styles.editor}>
    <h2 className={styles.title}>Card Maker</h2>
    {cards.map((card) => (
      <CardEditFrom key={card.id} card={card} />
    ))}
    <CardAddForm onAddCard={onAddCard} />
  </section>
);

export default Editor;
