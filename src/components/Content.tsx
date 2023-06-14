import React from 'react'
import styles from '../assets/styles/Content.module.css'
import CustomButton from './CustomButton'

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemWrapper}>
        <article className={styles.item}>

        </article>
        <article className={styles.item}>

        </article>
        <article className={styles.item}>

        </article>
      </div>
      <CustomButton
        title='More'
        onClick={() => { }} />
    </div>
  )
}
export default Content