import React from "react";
import styles from "../assets/styles/CustomButton.module.css";

interface ICustomButtonProps {
  title: string;
  onClick: () => void;
}

const CustomButton = (props: ICustomButtonProps) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.title}
    </button>
  );
};

export default CustomButton;
