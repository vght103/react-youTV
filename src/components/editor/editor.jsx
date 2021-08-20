import React from "react";
import styles from "./editor.module.css";
import CardEditFrom from "../card_edit_form/card_edit_from";

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h2 className={styles.title}>Card Maker</h2>
    {cards.map((card) => (
      <CardEditFrom key={card.id} card={card} />
    ))}
  </section>
);

export default Editor;
