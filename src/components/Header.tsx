import React, { useState } from "react";
import CustomButton from "./CustomButton";
import styles from '../assets/styles/Header.module.css'
import Modal from "./Modal";

const Header = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <header className={styles.header}>
      {showModal && <Modal closeModal={() => { setShowModal(false) }} />}
      <div className={styles.button}>
        <CustomButton
          title="Sign In"
          onClick={() => { setShowModal(true) }} />
      </div>
    </header>
  )
}

export default Header