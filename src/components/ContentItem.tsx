import React from "react";
import styles from '../assets/styles/Content.module.css'

interface IContentItemProps {
  email: string;
  body: string;
}

const ContentItem = (props: IContentItemProps) => {

  const randomRating = Math.floor(Math.random() * (Math.max(6) - Math.min(1)) + Math.min(1))

  return (
    <article
      className={styles.item}>
      <img className={styles.itemImg} src="img/waterfall.jpg" alt="" />
      <div className={styles.itemInfo}>
        {randomRating}
      </div>
    </article>
  )
}

export default ContentItem