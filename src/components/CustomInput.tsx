import React from "react";
import styles from '../assets/styles/Modal.module.css';

interface ICustomInput {
  label: string;
  value: string;
  onChange: (e: any) => void;
  type: 'text' | 'password';
}

const CustomInput = (props: ICustomInput) => {
  return (
    <label htmlFor={props.label}>
      <input
        id={props.label}
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        required />
      <span>{props.label}</span>
    </label>
  )
}

export default CustomInput