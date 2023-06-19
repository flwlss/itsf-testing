import React, { useState } from "react";
import styles from '../assets/styles/Content.module.css'
import CustomButton from "./CustomButton";

interface IContentItemProps {
  email: string;
  body: string;
}

const ContentItem = (props: IContentItemProps) => {

  const randomRating = Math.floor(Math.random() * (Math.max(6) - Math.min(1)) + Math.min(1))
  const [showCard, setShowCard] = useState(false)
  const [ratingValue, setRatingValue] = useState(randomRating)

  return (
    <article
      onMouseEnter={() => { setShowCard(true) }}
      onMouseLeave={() => { setShowCard(false) }}
      className={styles.item}>
      <img className={styles.itemImg} src="img/waterfall.jpg" alt="" />
      <div className={showCard ? styles.itemInfo : `${styles.itemInfo} ${styles.itemInfoActive}`}>
        <div className={styles.itemInfoWrapper}>
          <div className={styles.itemInfoEmailRating}>
            <p>{props.email}</p>
            <div className={styles.itemInfoRating}>
              <p>{ratingValue}</p>
              <img src="/img/star.svg" alt="" />
            </div>
          </div>
          <p className={styles.itemInfoText}>{props.body}</p>
        </div>
        <div className={styles.visitButton}>
          <CustomButton onClick={() => { }} title="Visit comment" />
        </div>
      </div>
    </article>
  )
}

export default ContentItem