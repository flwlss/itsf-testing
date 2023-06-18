import React, { useState } from "react";
import styles from '../assets/styles/Modal.module.css';
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import CustomCheckbox from "./CustomCheckbox";

interface IModalProps {
  closeModal: () => void
}

const Modal = (props: IModalProps) => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div
      onClick={props.closeModal}
      className={styles.modalBackground}>
      <form
        onSubmit={(e) => { e.preventDefault() }}
        onClick={(e) => { e.stopPropagation() }}
        className={styles.modal}>
        <div
          onClick={props.closeModal}
          className={styles.modalClose} />
        <h1>Authorization</h1>
        <div style={{ marginBottom: 25 }}>
          <CustomInput
            label="Login"
            onChange={(e) => { setLogin(e.target.value) }}
            type="text"
            value={login}
          />
        </div>
        <CustomInput
          label="Password"
          onChange={(e) => { setPassword(e.target.value) }}
          type="password"
          value={password}
        />
        <CustomCheckbox />
        <CustomButton
          onClick={() => { alert(login) }}
          title="Sign In"
          width="166px"
          height="40px"
        />
      </form>
    </div>
  )
}

export default Modal