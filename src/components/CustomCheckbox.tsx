import React from 'react'
import styles from '../assets/styles/Modal.module.css';

interface ICustomCheckbox {
  onClick: () => void;
  checked: boolean;
}

const CustomCheckbox = (props: ICustomCheckbox) => {
  return (
    <div className={styles.checkboxWrapper}>
      <label className={styles.checkbox}>
        <input
          onClick={props.onClick}
          checked={props.checked}
          type="checkbox" />
        <span className={styles.checkmark} />
      </label>
      <p>Remember me on next login</p>
    </div>
  )
}

export default CustomCheckbox