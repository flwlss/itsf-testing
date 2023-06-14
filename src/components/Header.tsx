import React from "react";
import CustomButton from "./CustomButton";
import styles from '../assets/styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <CustomButton
        title="Sign In"
        onClick={() => { }} />
    </header>
  )
}

export default Header