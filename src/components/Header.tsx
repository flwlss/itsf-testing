import React, { useState } from "react";
import CustomButton from "./CustomButton";
import styles from '../assets/styles/Header.module.css'
import Modal from "./Modal";

const Header = () => {

  const [showModal, setShowModal] = useState(true)

  return (
    <header className={styles.header}>
      {showModal && <Modal closeModal={() => { setShowModal(false) }} />}
      <CustomButton
        title="Sign In"
        onClick={() => { setShowModal(true) }} />
    </header>
  )
}

export default Header